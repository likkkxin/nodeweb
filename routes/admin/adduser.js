const Joi = require('joi');
const {User}=require('../../model/user')
const bcrypt=require('bcrypt')
module.exports=async function (req,res){
      const schema=Joi.object({
        name:Joi.string().min(2).max(12).required().error(new Error("用户名验证不通过")),
        email:Joi.string().email().required().error(new Error("邮箱验证不通过")),
        password:Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error("密码验证不通过")),
        role:Joi.string().valid("normal","admin").required().error(new Error("请选择角色")),
        state:Joi.number().valid(1,0).required().error(new Error("请选择状态")),

    })
    console.log(req.body)
    try {
       await schema.validateAsync(req.body)
    } catch (e) {
       return res.redirect("/admin/useredit?message="+e.message)
      
    }
    let user=await User.findOne({email:req.body.email});
    if (user) {
       return res.redirect("/admin/useredit?message=邮箱已存在")
        
    }
    const salt=await bcrypt.genSalt(10);
    let password=await bcrypt.hash(req.body.password,salt);
    req.body.password=password;
    console.log(req.body);
    await User.create(req.body)
    res.redirect("/admin/user")

}
