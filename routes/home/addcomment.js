const {
    comment
} = require("../../model/comment")
module.exports = async function (req, res) {
    const {
        uid,
        aid,
        content
    } = req.body
    await comment.create({
        uid:uid,
        aid:aid,
        content:content,
        time:new Date(),
    }),
    res.redirect("/article?id="+aid)
}