var express = require('express');
var router = express.Router();
const saltRounds = 10;
// require("../model/connect")


/* GET users listing. */
//展示用户路由
router.post('/article-add', require("./admin/addarticle"));

router.get('/user', require("./admin/userpage"));
//编辑用户路由
router.get('/useredit', require('./admin/useredit'));
//文章展示路由
router.get('/article', require("./admin/articlepage"));
//编辑文章路由
router.get('/article-edit', require('./admin/articleedit'));
//展示登录页面路由
router.get('/login', require('./admin/loginpage'));
//退出功能
router.get('/logout',require('./admin/logout'))
//登录逻辑路由
router.post('/login',require("./admin/login"))
//新增用户路由
router.post("/adduser",require('./admin/adduser'))
router.post("/updatauser",require('./admin/userupdata'))

router.get("/deleteuser",require('./admin/deleteuser'))







module.exports = router;