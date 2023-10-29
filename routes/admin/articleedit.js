
const path=require("path")
const {Aricle}=require("../../model/article")
const fs=require("fs");
const { userinfo } = require("os");

module.exports = async function  (req, res, next) {
  req.app.locals.selectmark = 'article'; 
  if (req.query.id) {
    let article=await Aricle.findById(req.query.id)
    res.render("./admin/article-edit",{
      articledata:article,
      link:"/admin/articleupdata",
      btntext:'修改'

    })

    
  } else {
    res.render("./admin/article-edit",{
      link:"/admin/article-add",
      btntext:'提交'

    })
    // console.log(req.session.id);
    // res.send(req.session.id)
  }
}