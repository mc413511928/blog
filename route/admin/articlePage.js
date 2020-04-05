const { Article } = require('../../model/article');
const pagination = require('mongoose-sex-page');

module.exports = async (req, res) => {
    req.app.locals.currentLink = 'article';
    let page = req.query.page || 1;
    // page: 当前页
    // size: 没页显示多少条
    // display: 需要展示多少页
    // exec: 执行查询操作
    let articles = await pagination(Article).find().page(page).size(3).display(5).populate('author').exec();

    // res.send(articles);

    // res.send(articles);
    res.render('admin/article', {
        userInfo: req.session.userInfo,
        articles
    });
};
