module.exports = (req, res) => {
    // 渲染 admin 模板
    res.render('admin/user', {
        userInfo: req.session.userInfo
    });
};