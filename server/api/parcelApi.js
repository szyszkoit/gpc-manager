var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../db/sqlMap');
var models = require('../db/db');
// Connect to the database
var conn = mysql.createPool(models.mysql);
// conn.connect();
var jsonWrite = function(res, ret) {
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