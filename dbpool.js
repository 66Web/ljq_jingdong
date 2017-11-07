/**数据库连接池模块
 * 向外提供pool对象**/
const mysql = require('mysql');

var pool = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'jd',
    port:3306,
    connectionLimit:5  //连接池最大容量
});

module.exports = pool;