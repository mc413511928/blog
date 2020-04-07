const Comment = require('../../model/comment');
module.exports = async (req, res) => {
    // res.send(req.body);
    await Comment.create(req.body);
    // 跳转到当前详情页
    res.redirect(`/home/article?id=${req.body.aid}`);
};