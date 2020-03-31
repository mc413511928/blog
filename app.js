const express = require('express');
// 创建服务器对象
const app = express();

// 路由相关的操作
app.use('/admin', require('./route/admin'));
app.use('/home', require('./route/home'));

app.listen(3000, () => console.log('Server running on http://localhost:3000'));