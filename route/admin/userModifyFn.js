const {
    User
} = require('../../model/user');
const hash = require('../../utils/hash');

module.exports = async (req, res, next) => {
    let id = req.query.id; // GET 数据
    let {
        username,
        password,
        role,
        state,
        email
    } = req.body; // POST 数据

    // 查询传过来的密码和实际查询过来用户的密码是否一致
    let user = await User.findOne({
        _id: id
    });

    if (user.password === hash(password)) {
        // 密码一致，允许修改
        await User.updateOne({
            _id: id
        }, {
            username,
            password,
            role,
            state,
            email
        });
        res.redirect('/admin/user');
    } else {
        // 密码不一致，不允许修改
        return next(JSON.stringify({
            path: '/admin/user-edit',
            message: '密码不一致',
            id
        }));
    }
};