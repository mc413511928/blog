const express = require('express');

// 创建路由对象
const home = express.Router();

home.get('/', (req, res) => {
    res.send('前台首页');
});

module.exports = home;