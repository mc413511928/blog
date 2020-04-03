const {
    User,
    userValidator
} = require('../../model/user');
const hash = require('../../utils/hash');

module.exports = async (req, res, next) => {
    try {
        await userValidator(req.body);
    } catch (err) {
        // return res.redirect(`/admin/user-edit?message=${err.message}`);
        return next(JSON.stringify({
            path: '/admin/user-edit',
            message: err.message
        }));
    }
    // 查询邮箱在数据库是否存在
    const user = await User.findOne({
        email: req.body.email
    });

    if (user) {
        // 邮箱已经存在了不应该允许添加
        // return res.redirect(`/admin/user-edit?message=邮箱已经存在了`);
        return next(JSON.stringify({
            path: '/admin/user-edit',
            message: '邮箱已经存在了'
        }));
    }
    // 对用户的密码进行加密
    req.body.password = hash(req.body.password);
    // 添加到数据库
    await User.create(req.body);

    // 跳转的操作状态码默认是 302
    res.redirect('/admin/user');
};