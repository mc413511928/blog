const {
    IncomingForm
} = require('formidable');
const path = require('path');
const {
    Article
} = require('../../model/article');

module.exports = (req, res) => {
    // Step1: 生成表单对象
    const form = new IncomingForm();
    // Step2: 指定上传路径
    form.uploadDir = path.join(__dirname, '..', '..', 'public', 'uploads');
    // Step3: 保留上传文件的后缀
    form.keepExtensions = true;
    // Step4: 解析 req 对象
    form.parse(req, async (err, fields, files) => {
        // fields: 普通数据
        // files:  上传的文件
        await Article.create({
            title: fields.title,
            author: fields.author,
            publishDate: fields.publishDate,
            cover: files.cover.path.split('public')[1],
            content: fields.content
        });
        res.redirect('/admin/article');
    });
};