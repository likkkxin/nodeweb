require("../../model/connect")
const {Aricle} = require("../../model/article");


module.exports=async function (req, res) {
  req.app.locals.selectmark='article';
  let article=await Aricle.find().populate("author")
    res.render("./admin/article", {
      articledata:article,
      userrole:req.session.role,
      articlenum:article.length
    })
  }