const fs=require("fs")
const {Aricle}=require("../../model/article");
const path=require("path")
module.exports=async function (req, res) {

    let article=await Aricle.findOne({_id:req.query.id});
    
    

    let filepath=path.join(__dirname,"../",'../','public',article.cover);
    fs.unlink(filepath, function(err) {
        if (err) {
            return console.error(err);
        }
        console.log("文件删除成功！");
     });
     await article.deleteOne()

    res.redirect("/admin/article")
    }