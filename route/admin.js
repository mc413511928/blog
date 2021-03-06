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
// 新增用户的编辑页面
admin.get('/user-edit', require('./admin/userEditPage'));
// 新增用户的功能
admin.post('/user-edit', require('./admin/userEditFn'));
// 修改用户
admin.post('/user-modify', require('./admin/userModifyFn'));
// 删除用户
admin.get('/remove', require('./admin/userRemoveFn'));

// 文章页面
admin.get('/article', require('./admin/articlePage'));
// 文章发布页面
admin.get('/article-edit', require('./admin/articleEditPage'));

// 文章添加功能
admin.post('/article-add', require('./admin/articleAddFn'));


module.exports = admin;