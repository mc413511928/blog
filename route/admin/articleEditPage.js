module.exports = (req, res) => {
    // 文章管理的标识，为了做高亮处理
    req.app.locals.currentLink = 'article';
    res.render('admin/article-edit', {
        userInfo: req.session.userInfo
    });
};
