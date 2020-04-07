const {
    Article
} = require('../../model/article');
const Comment = require('../../model/comment');

module.exports = async (req, res) => {
    // 文章ID
    try {
        let _id = req.query.id;
        let article = await Article.findOne({
            _id
        }).populate('author');
        if (article === null) {
            // 如果 article 不存在，就没有这个详情页，不需要渲染了
            return res.redirect('/home');
        }
        // 查询当前文章下的所有评论
        const commets = await Comment.find({aid: _id}).populate('uid');
        // res.send(commets);
        res.render('home/article', {
            article,
            userInfo: req.session.userInfo,
            commets
        });
    } catch(err) {
        return res.redirect('/home');
    }
};