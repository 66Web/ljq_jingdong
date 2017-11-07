/*整个项目的主模块文件：
* 负责创建web服务器对象，监听指定端口
* 并向客户端提供静态资源+动态资源服务*/

//mysql连接数据库会另建模块对应订单等页面，
//主模块只负责创建web服务器
const http = require('http');
const express = require('express');
const user = require('./user');
const uc = require('./usercenter');

var app = express();//请求处理函数
http.createServer(app).listen(8080);

//向客户端提供静态资源的响应
app.use(express.static('public'));

//向客户端提供动态资源的响应
/**设置127.0.0.1:8080/的默认页面**/
app.get('/',(req,res)=>{
    //若客户端请求了/,则重定向到login.html
    res.redirect('login.html');
});
app.post('/user/register',user.register);
app.post('/user/login',user.login);

app.get('/uc/myOrders',uc.myOrders);
app.get('/uc/buyStat',uc.buyStat);