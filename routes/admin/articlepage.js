require("../../model/connect")
const {Aricle} = require("../../model/article");
const {User}=require('../../model/user')


module.exports=async function (req, res) {
  req.app.locals.selectmark='article';
  let article=await Aricle.find()
  let author=await User.findById(article._id)
  console.log(article);
    res.render("./admin/article", {
      articledata:article
    })
  }