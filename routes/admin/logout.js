module.exports=function(req,res){
    req.session.destroy(function(){
    res.clearCookie("keyboard cat");
    res.redirect("/admin/login")
  
    })
  }