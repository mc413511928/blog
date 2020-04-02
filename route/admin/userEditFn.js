const Joi = require('joi');
const {
    User
} = require('../../model/user');
const hash = require('../../utils/hash');

module.exports = async (req, res) => {
    // 定义校验规则
    const schema = {
        username: Joi.string().min(2).max(12).required().error(new Error('用户名不符合验证规则')),
        email: Joi.string().email().required().error(new Error('邮箱格式不符合要求')),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error('密码格式不符合要求')),
        role: Joi.string().valid('normal', 'admin').required().error(new Error('角色值非法')),
        state: Joi.number().valid(0, 1).required().error(new Error('状态值非法'))
    };

    try {
        await Joi.validate(req.body, schema);
    } catch (err) {
        return res.redirect(`/admin/user-edit?message=${err.message}`);
    }
    // 查询邮箱在数据库是否存在
    const user = await User.findOne({
        email: req.body.email
    });

    if (user) {
        // 邮箱已经存在了不应该允许添加
        return res.redirect(`/admin/user-edit?message=邮箱已经存在了`);
    }
    // 对用户的密码进行加密
    req.body.password = hash(req.body.password);
    // 添加到数据库
    await User.create(req.body);

    // 跳转的操作状态码默认是 302
    res.redirect('/admin/user');
};