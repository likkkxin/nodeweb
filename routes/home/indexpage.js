const {
    Aricle
} = require("../../model/article")
const P = require('mongoose-sex-page')


module.exports = async function (req, res, next) {
    let article = await P(Aricle).find().page(req.query.page).size(6).display(5).populate("author").exec();
    res.render('./home/index', {

        articledata: article

    });
}