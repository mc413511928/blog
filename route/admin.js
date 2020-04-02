const express = require('express');

// 创建路由对象
const admin = express.Router();
// 登录界面
admin.get('/login', require('./admin/loginPage'));
// 用户界面
admin.get('/user', require('./admin/userPage'));
// 登录功能
admin.post('/login', require('./admin/loginFn'));
// 退出功能
admin.get('/logout', require('./admin/logoutFn'));

module.exports = admin;