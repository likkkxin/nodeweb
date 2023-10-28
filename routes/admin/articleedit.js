
const path=require("path")
const {Aricle}=require("../../model/article")
const fs=require("fs")

module.exports = async function  (req, res, next) {
  req.app.locals.selectmark = 'article'; 
  if (req.query) {
    let article=await Aricle.findById(req.query.id)
    res.render("./admin/article-edit",{
      articledata:article
    })

    
  } else {
    res.render("./admin/article-edit")
  }
}