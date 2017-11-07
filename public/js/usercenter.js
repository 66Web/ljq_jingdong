//功能1：页面加载完，异步请求页头和页尾
$('#header').load('header.html',function(){
    //页面已经异步加载完成，挂载到DOM树
    $('#welcome').html('欢迎回来：'+sessionStorage['loginUname']);
});

$('#footer').load('footer.html');


//功能2：为附加导航中的超链接添加单击事件监听——事件代理
$('.affix').on('click','li a',function(e){
    e.preventDefault();
    //修改A的父元素LI的.active的位置
    $(this).parent().addClass('active').siblings('.active').removeClass('active');

    //根据a的href找到对应的右侧div，修改.active的位置
    var id = $(this).attr('href');
    $(id).addClass('active').siblings('.active').removeClass('active');
});


//功能3：异步请求“我的订单”数据
$.ajax({
    type:'GET',
    url:'/uc/myOrders',
    data:{uid:sessionStorage['loginUid']},
    success:function(list){
         var html = '';
         for(var i=0;i<list.length;i++){
             var o = list[i]; //第i个订单
             html += `
               <tr>
                   <td colspan="6">订单编号：${o.oid}</td>
               </tr>
               <tr>
                   <td>`;

             //遍历订单中的每个商品，生成一个<img>元素
             for(var j=0;j<o.products.length;j++){
                 var p = o.products[j];
                 html += `<img src="${p.pic}" width="50">`;
             }

             html += `</td>
                   <td>${o.rcvName}</td>
                   <td>${o.price}<br>${o.payment}</td>
                   <td>${o.orderTime}</td>
                   <td>${o.status}</td>
                   <td>再来一单</td>
               </tr>
             `;
         }
        $('#table-orders tbody').html(html);
    },
    error:function(list){
    }

});


//功能4：异步请求“消费统计”数据，绘制Canvas统计图
//生成随机颜色的函数
function rc(){
    var r = Math.floor( Math.random()*256 );
    var g = Math.floor( Math.random()*256 );
    var b = Math.floor( Math.random()*256 );
    return `rgb(${r},${g},${b})`;
}
$.ajax({
    type:'GET',
    url:'/uc/buyStat',
    data:{uid:sessionStorage['loginUid']},
    success:function(list){
        var ctx = canvasBuystat.getContext('2d');
        ctx.strokeRect(50,50,700,500);//绘制外围边框——描边
        var colWidth = 700/25;//每个柱的宽度
        for(var i = 0;i<list.length; i++){
            var x = (2*i+1)*colWidth+50;
            var y = 600-50-list[i].value/15;//数据太大，缩小比例
            var w = colWidth;
            var h = list[i].value/15;
            //绘制每个柱的轮廓
            ctx.strokeRect(x,y,w,h);
            //为每个柱填充随机颜色
            var g = ctx.createLinearGradient(x,y,x,y+h);
            g.addColorStop(0,rc());
            g.addColorStop(1,'#fff');
            ctx.fillStyle = g;
            ctx.fillRect(x,y,w,h);
        }
    }
});

//功能5：异步请求“消费统计”数据，绘制ＳＶＧ统计图
$.ajax({
    type:'GET',
    url:'/uc/buyStat',
    data:{uid:sessionStorage['loginUid']},
    success:function(list){
       var c = new FusionCharts({
           type:'column3d',
           renderAt:'container-buystat-svg',
           width:'800',
           height:'600',
           dataSource:{data:list}
       });
       c.render();//把图表渲染到DOM树上
    }
});

//功能6：异步请求“抽奖统计”数据，绘制Canvas抽奖图
//若用户还有剩余抽奖机会，允许点击抽奖按钮

var ctx = $('#canvas-lottery')[0].getContext('2d');
var w = 499;
var h = 499;

var progress = 0;//定义全局变量
var imgPan = new Image();
imgPan.src = 'img/pan.png';
imgPan.onload = function(){
   progress+=75;
    if(progress===100){
        startDraw();
    }
};
var imgPin = new Image();
imgPin.src = 'img/pin.png';
imgPin.onload = function(){
    progress+=25;
    if(progress===100){
        startDraw();
    }
};
function startDraw(){
    ctx.drawImage(imgPan,0,0);
    ctx.drawImage(imgPin,w/2-imgPin.width/2,h/2-imgPin.height/2);
    //允许用户点击“抽奖”按钮一次
    $('#bt-lottery').one('click',function(){
        //让圆盘转，而指针不转
        var duration = Math.random()*5000+4000;//允许旋转的总时长
        var last = 0;//当前已经旋转的时长
        var deg = 0;//当前已经旋转的角度
        var timer = setInterval(function(){
            //绘制圆盘：保存状态->平移->旋转->绘图--恢复状态
            ctx.save();
            ctx.translate(w/2,h/2);
            ctx.rotate(deg*Math.PI/180);
            ctx.drawImage(imgPan, -imgPan.width/2,-imgPan.height/2);
            ctx.restore();

            deg += 5;
            deg %= 360;//375度 等价于 15度

            //绘制指针
            ctx.drawImage(imgPin, w/2-imgPin.width/2,h/2-imgPin.height/2);

            last += 10;
            if(last>=duration){//当前旋转的持续时间已到
                clearInterval(timer);
            }
        },10)
    })
}

