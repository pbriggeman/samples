var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET home page. */
router.get('/', function(req, res, next) {
    // ensure database exists
    var rArr = __dirname.split("/");
    var tmp = rArr.slice(0,6);
    var __dirRoot = tmp.join("/");
    var file = __dirRoot + "/data/test.db";
    var exists = fs.existsSync(file);
    var sqlite3 = require("sqlite3").verbose();
    var db = new sqlite3.Database(file);
    res.render('index', { title: "Application Home", exists: exists });
});

module.exports = router;
