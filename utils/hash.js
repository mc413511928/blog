const crypto = require('crypto');

module.exports = con => {
    // 指定加密的方式和秘钥
    const hmac = crypto.createHmac('sha256', 'secret-key');
    // 指定加密的内容
    hmac.update(con);
    // 输入加密的结果
    return hmac.digest('hex');
};
