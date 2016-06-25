var S = require('sequelize');
var sql = new S('ziptoss', 'admin', 'ziptoss0704', {
    host : 'ziptoss.cotpo2v1rlxq.ap-northeast-2.rds.amazonaws.com',
    port : 3306
})

module.exports = sql;