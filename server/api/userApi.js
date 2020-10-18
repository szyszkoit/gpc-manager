var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var models = require('../db/db');

// var $sql = require('../db/sqlMap');

// Connect to the database
var conn = mysql.createConnection(models.mysql);

// conn.connect();
// var jsonWrite = function(res, ret) {
//     if(typeof ret === 'undefined') {
//         res.json({
//             code: '1',
//             msg: 'operation failed'
//         });
//     } else {
//         res.json(ret);
//     }
// };

// Adding User Interface
// router.post('/addUser', (req, res) => {
//     var sql = $sql.user.add;
//     var params = req.body;
//     console.log(params);
//     conn.query(sql, [params.name, params.price], function(err, result) {
//         if (err) {
//             console.log(err);
//         }
//         if (result) {
//             jsonWrite(res, result);
//         }
//     })
// });
// Adding User Interface
// router.get('/addUser', (req, res) => {
//      res.send('retrunJson');
// });

module.exports = router;