var express = require('express');
var router = express.Router();

/* GET db error page. */
router.get('/db-error', function(req, res, next) {
    res.render('db_error', { message: "Database file not found!" });
});

module.exports = router;
