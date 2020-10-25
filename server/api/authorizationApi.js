// routes/router.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const jwt = require('jsonwebtoken');
const db = require('../db/db.js');
const mysql = require('mysql');
const userMiddleware = require('../middleware/users.js');
var conn = mysql.createPool(db.mysql);
router.post('/sign-up', userMiddleware.validateRegister, (req, res, next) => {
    conn.query(
        `SELECT * FROM user WHERE LOWER(username) = LOWER(${conn.escape(
          req.body.username
        )});`,
        (err, result) => {
          if (result.length) {
            return res.status(409).send({
              msg: 'This username is already in use!'
            });
          } else {
            // username is available
            bcrypt.hash(req.body.password, 10, (err, hash) => {
              if (err) {
                return res.status(500).send({
                  msg: err
                });
              } else {
                // has hashed pw => add to database
                conn.query(
                  `INSERT INTO user (id, username, password, registered) VALUES ('${uuid.v4()}', ${conn.escape(
                    req.body.username
                  )}, ${conn.escape(hash)}, now())`,
                  (err, result) => {
                    if (err) {
                      throw err;
                      return res.status(400).send({
                        msg: err
                      });
                    }
                    return res.status(201).send({
                      msg: 'Registered!'
                    });
                  }
                );
              }
            });
          }
        }
      );
});
router.post('/login', (req, res, next) => {
    conn.query(
        `SELECT * FROM user WHERE username = ${conn.escape(req.body.username)};`,
        (err, result) => {
          // user does not exists
          if (err) {
            throw err;
            return res.status(400).send({
              msg: err
            });
          }
          if (!result.length) {
            return res.status(401).send({
              msg: 'Username or password is incorrect!'
            });
          }
          // check password
          bcrypt.compare(
            req.body.password,
            result[0]['password'],
            (bErr, bResult) => {
              // wrong password
              if (bErr) {
                throw bErr;
                return res.status(401).send({
                  msg: 'Username or password is incorrect!'
                });
              }
              if (bResult) {
                const token = jwt.sign({
                    username: result[0].username,
                    userId: result[0].id
                  },
                  'SECRETKEY', {
                    expiresIn: '7d'
                  }
                );
                conn.query(
                  `UPDATE users SET last_login = now() WHERE id = '${result[0].id}'`
                );
                return res.status(200).send({
                  msg: 'Logged in!',
                  token,
                  user: result[0]
                });
              }
              return res.status(401).send({
                msg: 'Username or password is incorrect!'
              });
            }
          );
        }
      );
});
router.get('/secret-route', userMiddleware.isLoggedIn, (req, res, next) => {
    console.log(req.userData);
    res.send('This is the secret content. Only logged in users can see that!');
  });
module.exports = router;
