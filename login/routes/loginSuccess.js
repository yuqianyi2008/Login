/**
 * Created by dllo on 17/4/24.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    res.render('loginSuccess');
});

module.exports = router;