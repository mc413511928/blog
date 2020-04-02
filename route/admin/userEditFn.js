const Joi = require('joi');

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
    } catch(err) {
        res.redirect(`/admin/user-edit?message=${err.message}`)
    }
};