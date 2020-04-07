const { Article } = require('../../model/article');
const pagination = require('mongoose-sex-page');

module.exports = async (req, res) => {
    let page = req.query.page || 1;
    // page: 哪一页
    // size: 一页显示多少条
    // display: 显示多少页
    // exec: 执行前面的查询操作
    const articles = await pagination(Article).find().page(page).size(2).display(5).populate('author').exec();
    // res.send(articles);
    res.render('home/default', {
        articles,
        userInfo: req.session.userInfo
    });
};