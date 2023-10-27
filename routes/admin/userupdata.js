const {
  User
} = require('../../model/user');
const bcrypt = require('bcrypt');

module.exports = async (req, res, next) => {
  const {
    name,
    email,
    password,
    role,
    state
  } = req.body
  console.log(req.body);
  const {
    id
  } = req.query
  let finduser = await User.findById(id)
  let isValid = await bcrypt.compare(password, finduser.password)
  if (isValid) {

    await User.updateOne({
      _id: id
    }, {
      name: name,
      email: email,
      role: role,
      state: state
    })
    res.redirect("/admin/user")
  } else {
    res.render("./admin/user-edit", {
      user: finduser,
      link: "/admin/updatauser?id=" + id,
      submit: "修改",
      msg: "密码错误无法修改"

    })
  }
}