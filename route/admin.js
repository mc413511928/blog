const express = require('express');

// 创建路由对象
const admin = express.Router();

admin.get('/login', (req, res) => {
    // 渲染 admin 模板
    res.render('admin/login', {});
});

module.exports = admin;