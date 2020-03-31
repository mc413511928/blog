const express = require('express');

// 创建路由对象
const admin = express.Router();

admin.get('/login', (req, res) => {
    // 渲染 admin 模板
    res.render('admin/login', {});
});

admin.get('/user', (req, res) => {
    // 渲染 admin 模板
    res.render('admin/user', {});
});

module.exports = admin;