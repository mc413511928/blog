const {
    Article
} = require('../../model/article');
const Comment = require('../../model/comment');

module.exports = async (req, res) => {
    // 文章ID
    let _id = req.query.id;
    let article = await Article.findOne({
        _id
    }).populate('author');

    // 查询当前文章下的所有评论
    const commets = await Comment.find({aid: _id}).populate('uid');
    // res.send(commets);
    res.render('home/article', {
        article,
        userInfo: req.session.userInfo,
        commets
    });
};