const {
  Aricle
} = require("../../model/article")
const {
  comment
} = require("../../model/comment")


module.exports = async function (req, res, next) {
  let article = await Aricle.findById(req.query.id).populate("author");
  let comments = await comment.find({"aid":req.query.id}).populate("uid")

  // res.send(comments)

  res.render('./home/article', {
    articledata: article,
    comments:comments
  });
}