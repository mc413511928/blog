const crypto = require('crypto');
// 指定加密的方式和秘钥
const hmac = crypto.createHmac('sha256', 'secret-key');
// 指定加密的内容
hmac.update('zhangman');
// 输入加密的结果
console.log(hmac.digest('hex'));