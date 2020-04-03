const { User } = require('../../model/user');

module.exports = async (req, res) => {
    // 当前页码
    let page = req.query.page || 1;
    // 每页显示多少条
    let pagesize = 2;
    // 总共条数
    let count = await User.countDocuments();
    // 总页数
    let total = Math.ceil(count / pagesize);

    // 应该跳过多少条
    // 第 1 页 => 跳过 0 条
    // 2 => 2
    // 3 => 4
    let start = (page - 1) * pagesize;
    const users = await User.find().skip(start).limit(pagesize);
    // 渲染 admin 模板
    res.render('admin/user', {
        userInfo: req.session.userInfo,
        users,
        page,
        total
    });
};