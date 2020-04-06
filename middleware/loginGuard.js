module.exports = (req, res, next) => {
    // 假如访问的是 /admin/user，req.url 就是 /user
    // 访问的不是登录页面，并且也不存在 session 信息，直接打回到登录页
    if (req.url !== '/login' && !req.session.userInfo) {
        res.redirect('/admin/login');
    } else {
        // console.log(req.session.userInfo.role, 2333333);
        if (req.session.role === 'normal') {
            return res.redirect('/home');
        }
        // 否则放行
        next();
    }
}