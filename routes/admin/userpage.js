const {
  User
} = require('../../model/user')
module.exports = async (req, res, ) => {
  let page = req.query.page || 1;
  let pagesize = 10;
  let count = await User.countDocuments({});
  let total = Math.ceil(count / pagesize);
  let start =(page - 1) * pagesize
  let totalusers = (await User.find()).length
  let users = await User.find({}).limit(pagesize).skip(()=>{(start<0)?1:start})
  req.app.locals.selectmark='user';

  res.render("./admin/user", {
    totalusers: totalusers,
    data: users,
    msg: req.session.username,
    userrole:req.session.role,
    totalpage: total,
    page: page,

  })
}