const express = require('express');

// 创建路由对象
const home = express.Router();
// 为什么没有自动找 home 下的 index.js 呢？
home.get('/', require('./home/index'));
home.get('/article', require('./home/article'));

module.exports = home;