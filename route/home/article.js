const {
    Article
} = require('../../model/article');

module.exports = async (req, res) => {
    let _id = req.query.id;
    let article = await Article.findOne({
        _id
    }).populate('author');
    // res.send(article);
    res.render('home/article', {
        article,
        userInfo: req.session.userInfo
    });
};