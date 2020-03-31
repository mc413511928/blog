const express = require('express');
// 创建服务器对象
const app = express();
const path = require('path');

// 连接数据库
require('./model/connect');
// require('./model/user');

// 用怎样的模板引擎渲染怎样的后缀的文件
app.engine('art', require('express-art-template'));
// 视图模板的根目录
app.set('views', path.join(__dirname, 'views'));
// 默认后缀
app.set('view engine', 'art');

// 配置静态资源访问
app.use(express.static(path.join(__dirname, 'public')));

// 路由相关的操作
app.use('/admin', require('./route/admin'));
app.use('/home', require('./route/home'));

app.listen(3000, () => console.log('Server running on http://localhost:3000'));