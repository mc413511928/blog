const { IncomingForm } = require('formidable');
const path = require('path');

module.exports = (req, res) => {
    // Step1: 生成表单对象
    const form = new IncomingForm();
    // Step2: 指定上传路径
    form.uploadDir = path.join(__dirname, '..', '..', 'public', 'uploads');
    // Step3: 保留上传文件的后缀
    form.keepExtensions = true;
    // Step4: 解析 req 对象
    form.parse(req, (err, fields, files) => {
        // fields: 普通数据
        // files:  上传的文件
        res.send(files);
    });
};