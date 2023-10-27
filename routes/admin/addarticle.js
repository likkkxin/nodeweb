const Aricle = require("../../model/article");
const path = require("path")
const formidable = require("formidable")
module.exports = function (req, res) {
    const form = new formidable.IncomingForm({
        keepExtensions: true,
        uploadDir: path.join(__dirname, "../", '../', 'public', 'uploads'),
        multiples: true
    })
    console.log(req.body);
    form.parse(req, (err, fields, files) => {
        res.send(fields)
    })
}