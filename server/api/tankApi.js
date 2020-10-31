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
router.get('/get-exported-tanks', userMiddleware.isLoggedIn, (req, res) => {
    var sql = $sql.onTheRoad.getList;
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
router.get('/get-delivered-tanks', userMiddleware.isLoggedIn, (req, res) => {
    var sql = $sql.history.getList;
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
router.get('/get/:id', userMiddleware.isLoggedIn, (req, res) => {
    var sql = $sql.tank.get;
    var params = req.body;
    console.log(params);
    conn.query(sql, req.params.id, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});
router.post('/add', userMiddleware.isLoggedIn, (req, res) => {
    var sql = $sql.tank.add;
    var params = req.body;
    console.log(params);
    conn.query(sql,
        [
            params.name,
            params.parcelId,
            params.slotId,
            params.manufacturerId,
            params.capacityId,
            params.ownerId,
            params.valveId,
            params.pin,
            params.productionYear,
            params.comment,
            params.workComment
        ], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});
router.post('/edit', userMiddleware.isLoggedIn, (req, res) => {
    var sql = $sql.tank.edit;
    var params = req.body;
    console.log(params);
    conn.query(sql,
        [
            params.name,
            params.parcelId,
            params.slotId,
            params.manufacturerId,
            params.capacityId,
            params.ownerId,
            params.valveId,
            params.pin,
            params.productionYear,
            params.comment,
            params.workComment,
            params.id,
        ], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});
router.post('/export', userMiddleware.isLoggedIn, (req, res) => {
    var sql = $sql.tank.export;
    var params = req.body;
    console.log(params);
    conn.query(sql,
        [
            params.isExported,
            params.city,
            params.street,
            params.id,
        ], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});
router.post('/deliver', userMiddleware.isLoggedIn, (req, res) => {
    var sql = $sql.tank.deliver;
    var params = req.body;
    console.log(params);
    conn.query(sql,
        [
            params.id,
        ], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});


module.exports = router;