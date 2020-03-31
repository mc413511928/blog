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

admin.post('/login', (req, res) => {
    // res.send(req.body);
    const { email, password } = req.body;
    if (email.trim().length === 0 || password.trim().length === 0) {
        res.status(400).render('admin/error', {
            msg: '邮箱或密码不能为空'
        });
    }
});

module.exports = admin;