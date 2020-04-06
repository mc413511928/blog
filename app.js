const express = require('express');
// 创建服务器对象
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const dateFormat = require('dateformat');
const template = require('art-template');
const morgan = require('morgan');

if (process.env.NODE_ENV === 'development') {
    // 做开发环境特有的操作
    // 会自动在控制台打印请求日志
    app.use(morgan('dev'));
} else {
    // 做生产环境对应的操作
}

// 连接数据库
require('./model/connect');
// require('./model/user');

template.defaults.imports.dateFormat = dateFormat;

// 用怎样的模板引擎渲染怎样的后缀的文件
app.engine('art', require('express-art-template'));
// 视图模板的根目录
app.set('views', path.join(__dirname, 'views'));
// 默认后缀
app.set('view engine', 'art');

// 配置静态资源访问
app.use(express.static(path.join(__dirname, 'public')));
// 注意要写在所有路由的前面
app.use(bodyParser.urlencoded({
    extended: false
}));
// 配置 session
app.use(session({
    secret: 'ifer',
    saveUninitialized: false, // 清除未初始化的 sessionID
    cookie: {
        maxAge: 24 * 60 * 60 * 1000 // cookie 一天后过期
    }
}));

// 登录拦截
app.use('/admin', require('./middleware/loginGuard'));

// 路由相关的操作
app.use('/admin', require('./route/admin'));
app.use('/home', require('./route/home'));

// 错误处理
app.use((err, req, res, next) => {
    let obj = JSON.parse(err);
    let arr = [];
    for(let attr in obj) {
        if (attr != 'path') {
            arr.push(attr + '=' + obj[attr]);
        }
    }
    // arr => ['message=hello', 'id=88']
    res.redirect(`${obj.path}?${arr.join('&')}`);
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));