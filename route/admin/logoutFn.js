module.exports = (req, res) => {
    // 销毁 session
    req.session.destroy(function() {
        // 清除前端的 cookie
        res.clearCookie('connect.sid');
        // 跳转到登录
        res.redirect('/admin/login');
    });
};