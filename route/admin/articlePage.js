const { Article } = require('../../model/article');

module.exports = async (req, res) => {
    req.app.locals.currentLink = 'article';

    let articles = await Article.find().populate('author');

    // res.send(articles);
    res.render('admin/article', {
        userInfo: req.session.userInfo,
        articles
    });
};
