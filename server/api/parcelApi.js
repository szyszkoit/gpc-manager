const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const $sql = require('../db/sqlMap');
const db = require('../db/db');
// Connect to the database
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
router.get('/get-parcel-list', (req, res) => {
    var sql = $sql.parcel.getList;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.name, params.price], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});

module.exports = router;