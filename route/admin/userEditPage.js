const { User } = require('../../model/user');
module.exports = async (req, res, next) => {
    const { message, id } = req.query;
    if (id) {
        // 修改操作
        try {
            const user = await User.findOne({_id: id});
            res.render('admin/user-edit', {
                message,
                userInfo: req.session.userInfo,
                user,
                btnTxt: '修改',
                link: '/admin/user-modify?id=' + user._id
            });
        } catch(err) {
            // 直接统一渲染一个错误页面
            // return next(JSON.stringify({path: '/admin/user-edit', message: 'ID不能乱写'}))
            // 直接跳转到列表
            res.redirect('/admin/user');
        }
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