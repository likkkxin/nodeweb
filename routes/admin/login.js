const bcrypt = require('bcrypt');
const {
    User
} = require("../../model/user")
const login = async (req, res) => {
    const {
        email,
        password
    } = req.body;
    if (email.trim().length == 0 || password.trim().length == 0) {
        res.status(400).render('./admin/erro', {
            msg: "用户名和密码不能为空"
        });
        return
    }
    let user = await User.findOne({
        email
    });
    //如果邮箱存在，对比密码
    if (user) {

        bcrypt.compare(password, user.password, function (err, result) {
            if (result) {
                req.session.username = user.name;
                req.session.role=user.role
                req.session.id=user._id

                req.app.locals.userinfo = user;
                if (user.role=="admin") {
                    res.redirect("/admin/user");
                } else {
                    res.redirect("/");
                }
                

            }
            res.status(400).render('./admin/erro', {
                msg: "用户名或密码错误"
            })




        })
    } else  {
        res.status(400).render('./admin/erro', {
            msg: "用户名或密码错误"
        })
    }


}
module.exports = login