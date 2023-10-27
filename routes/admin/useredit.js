const {
  User
} = require('../../model/user')
module.exports = async (req, res, next) => {
  req.app.locals.selectmark='user';

  if (req.query.id) {
    const {
      id
    } = req.query;
    // console.log(id);
    let finduser = await User.findById(id)
    res.render("./admin/user-edit", {
      user: finduser,
      link:"/admin/updatauser?id="+id,
      submit:"修改",

    })
    // console.log(finduser);
  } else {
    res.render("./admin/user-edit", {
      submit:"提交",
      msg:req.query.message,
      link:"/admin/adduser"
    })
  }

}