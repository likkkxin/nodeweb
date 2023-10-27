const fs = require("fs")
const path=require("path")

module.exports = function async (req, res, next) {
  req.app.locals.selectmark = 'article'; 
  res.render("./admin/article-edit")
}