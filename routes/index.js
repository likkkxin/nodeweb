var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', require("./home/indexpage"));
router.get('/article', require("./home/articlepage"));
router.post("/addcomment",require("./home/addcomment"))


module.exports = router;
