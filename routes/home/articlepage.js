const {
  Aricle
} = require("../../model/article")
const {
  comment
} = require("../../model/comment")


module.exports = async function (req, res, next) {
  let article = await Aricle.findById(req.query.id).populate("author");
  // res.send(article)

  res.render('./home/article', {
    articledata: article
  });
}