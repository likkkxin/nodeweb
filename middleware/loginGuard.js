const Gurad = (req, res, next) => {
  if (req.url != "/login" && !req.session.username) {
    res.redirect("/admin/login")
  } else {
    if (req.session.role == "normal") {
      res.redirect("/")
      return
    }
    next()
  }
}
module.exports = Gurad