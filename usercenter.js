/**用户相关功能模块
 * 向外提供
 *myOrders()
 *buyStat()
 *lotteryStat()
 *lotterySave()
 *4个请求处理函数**/

const pool = require('./dbpool');

module.exports = {
    //从请求GET消息中读取客户端提交的uid
    //查询出该用户所有的订单信息，以JSON格式返回：
    //[{},{},{}]有几个数据，就有几个这样的对象
    myOrders:(req,res)=>{
      var uid = req.query.uid;
        //从连接池中获取连接对象，执行SELECT操作
        pool.getConnection((err,conn)=>{
            //根据uid查询其所有的订单
            conn.query(
                'SELECT * FROM jd_order WHERE userId=?',
                [uid],
                (err,result)=>{
                    /*遍历每个订单，为其添加products属性，是一个数组
                    保存着当前订单所购买的所有商品对象*/
                    //必须保证所有的订单都查询完对应的产品，才能向客户端输出
                    var progress = 0;//总进度
                    for(var i=0;i<result.length;i++){
                        var order = result[i];
                        var oid = order.oid;//根据订单编号查询所有编号
                        conn.query(
                            'SELECT * FROM jd_product WHERE pid IN (SELECT productid FROM jd_order_detail WHERE orderId=?)',
                            [oid],
                            (function(o){
                                return function(err,productResult){
                                    o.products = productResult;
                                    progress++;
                                    if(progress===result.length){
                                        //所有订单都已经查询到了对应的产品
                                        res.json(result);
                                        conn.release();
                                    }
                                }
                            })(order)
                        );
                    }
                });
        })
    },
    buyStat:(req,res)=>{
        var output = [//伪数据
            {label:'1月',value:4000},
            {label:'2月',value:2000},
            {label:'3月',value:5000},
            {label:'4月',value:3000},
            {label:'5月',value:0},
            {label:'6月',value:2000},
            {label:'7月',value:6000},
            {label:'8月',value:7000},
            {label:'9月',value:6500},
            {label:'10月',value:5000},
            {label:'11月',value:3000},
            {label:'12月',value:4400}
        ];
        res.json(output);
    }
};