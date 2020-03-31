const express = require('express');

// 创建路由对象
const admin = express.Router();

admin.get('/', (req, res) => {
    res.send('后台首页');
});

module.exports = admin;