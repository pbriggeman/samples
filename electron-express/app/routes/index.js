var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var rArr = __dirname.split("/");
    var tmp = rArr.slice(0,6);
    var rDir = tmp.join("/");
    res.render('index', { title: __dirname, dir:rDir });
});

module.exports = router;
