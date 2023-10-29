require("../../model/connect")
const {Aricle} = require("../../model/article");
const P  = require('mongoose-sex-page')


module.exports=async function (req, res) {
  req.app.locals.selectmark='article';
  let article=await P(Aricle).find().page(req.query.page).size(5).display(5).populate("author").exec();
  // res.send(article)
    res.render("./admin/article", {
      thispage:req.query.page||1,
      articledata:article,
      userrole:req.session.role,
    })  
  }