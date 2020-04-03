const { User } = require('../../model/user');

module.exports = async (req, res) => {
    const users = await User.find();
    // 渲染 admin 模板
    res.render('admin/user', {
        userInfo: req.session.userInfo,
        users
    });
};