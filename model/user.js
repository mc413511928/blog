const mongoose = require('mongoose');

// 定义集合规则
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },
    email: {
        type: String,
        // 保证邮箱地址在插入数据库时不重复
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // admin 超级管理员
    // normal 普通用户
    role: {
        type: String,
        required: true
    },
    // 0 启用状态
    // 1 禁用状态
    state: {
        type: Number,
        default: 0
    }
});

// 根据规则创建集合
const User = mongoose.model('User', userSchema);

// User.create({
//     username: 'ifer',
//     email: 'ifer@qq.com',
//     password: 'ifer',
//     role: 'admin',
//     state: 0
// }).then(res => console.log(res));

module.exports = {
    User
};