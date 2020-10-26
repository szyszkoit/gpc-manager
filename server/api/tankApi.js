var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('../db/db');
const $sql = require('../db/sqlMap');
const userMiddleware = require('../middleware/users.js');
const conn = mysql.createPool(db.mysql);
// conn.connect();
const jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: 'operation failed'
        });
    } else {
        res.json(ret);
    }
};

// Adding User Interface
router.get('/get-manufacturer-list', userMiddleware.isLoggedIn, (req, res) => {
    var sql = $sql.manufacturer.getList;
    var params = req.body;
    console.log(params);
    conn.query(sql, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});
router.get('/get-capacity-list', userMiddleware.isLoggedIn, (req, res) => {
    var sql = $sql.capacity.getList;
    var params = req.body;
    console.log(params);
    conn.query(sql, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});
router.get('/get-owner-list', userMiddleware.isLoggedIn, (req, res) => {
    var sql = $sql.owner.getList;
    var params = req.body;
    console.log(params);
    conn.query(sql, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});
router.get('/get-valve-list', userMiddleware.isLoggedIn, (req, res) => {
    var sql = $sql.valve.getList;
    var params = req.body;
    console.log(params);
    conn.query(sql, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});


module.exports = router;