const express = require('express');
const { User } = require('../model/user');
const hash = require('../utils/hash');

// 创建路由对象
const admin = express.Router();

admin.get('/login', (req, res) => {
    // 渲染 admin 模板
    res.render('admin/login', {});
});

admin.get('/user', (req, res) => {
    // 渲染 admin 模板
    res.render('admin/user', {
        userInfo: req.session.userInfo
    });
});

admin.post('/login', async (req, res) => {
    // res.send(req.body);
    const { email, password } = req.body;
    if (email.trim().length === 0 || password.trim().length === 0) {
        return res.status(400).render('admin/error', {
            msg: '邮箱或密码不能为空'
        });
    }
    // 校验成功啦~~~
    const user = await User.findOne({email});
    if (user) {
        // 说明邮箱存在，有此用户，判断[查询过来的密码]和[前端传递过来的密码]是否一致
        // 比较的是加密之后的结果
        if (user.password === hash(password)) {
            // 把用户信息存到 session 
            req.session.userInfo = user;
            // 跳转到用户界面
            res.redirect('/admin/user');
        } else {
            res.status(400).render('admin/error', {
                msg: '密码错误'
            });
        }
    } else {
        res.status(400).render('admin/error', {
            msg: '邮箱或密码错误'
        });
    }
});

admin.get('/logout', (req, res) => {
    // 销毁 session
    req.session.destroy(function() {
        // 清除前端的 cookie
        res.clearCookie('connect.sid');
        // 跳转到登录
        res.redirect('/admin/login');
    });
});

module.exports = admin;