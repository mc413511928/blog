const { User } = require('../../model/user');
module.exports = async (req, res) => {
    const { message, id } = req.query;
    if (id) {
        // 修改操作
        const user = await User.findOne({_id: id});
        res.render('admin/user-edit', {
            message,
            userInfo: req.session.userInfo,
            user,
            btnTxt: '修改',
            link: '/admin/user-modify'
        });
    } else {
        // 添加
        res.render('admin/user-edit', {
            message,
            userInfo: req.session.userInfo,
            btnTxt: '添加',
            link: '/admin/user-edit'
        });
    }
    
};