require("../../model/connect")
const {
    Aricle
} = require("../../model/article");
const path = require("path");
const formidable = require("formidable");
module.exports = function (req, res) {
    const form = new formidable.IncomingForm({
        keepExtensions: true,
        uploadDir: path.join(__dirname, "../", '../', 'public', 'uploads'),
        multiples: false
    })
    form.parse(req, async (err, fields, files) => {


        await Aricle.create({
            title: fields.title[0],
            author: fields.author[0],
            publishdate: fields.publishdate[0],
            cover: files.cover[0].filepath.split("public")[1],
            content: fields.content[0],
        })
        res.redirect("/admin/article")


    })

}