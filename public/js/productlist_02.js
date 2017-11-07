$(function(){
    /***用户登录***/
    var uname = null;
    var upwd  = null;
    $("#bt-login").click(function(){
        var u = $("#uname").val();
        var p = $("#upwd").val();
        $.ajax({
            type:'GET',
            url:'data/login_do_02.php',
            data:{uname:u,upwd:p},//参数
            success:function(data){
                console.log(data);
                var rs = parseInt(data);
                if(rs<0){
                    $("p.alert").html("用户名或密码有误")
                }else{
                    $(".modal").hide();
                    //升级增加cookie保存uid uname
                    document.cookie = 'uid='+data;
                    document.cookie = 'uname='+u;
                }
            },
            error:function(){
                alert("响应消息有错！请检查网络");
            }
        });
    });

    /***产品列表显示***/
    loadPage(1);
    function loadPage(page){
        $.ajax({
            url:'data/product_list.php?pageNo='+page,
            success:function(data){
                var html = "";
                for(var i=0;i<data.length;i++){
                    var obj = data[i];
                    html += `
                   <li>
                        <a href=""><img src="${obj.pic}" alt=""/></a>
                        <p>${obj.price}</p>
                        <h1><a href="">${obj.pname}</a></h1>
                        <div>
                        <a href="#" class="contrast"><i></i>对比</a>
                        <a href="#" class="p-operate"><i></i>关注</a>
                        <a href="${obj.pid}" class="addcart"><i></i>加入购物车</a>
                        </div>
                    </li>
                 `;
                }
                $("#plist ul").html(html);
            },
            error:function(){
                alert("请求商品列表出错，请检查网络！");
            }
        });
    }

    /***加载头文件  header.php***/
    /***加载脚文件  footer.php***/
    $("#header").load("data/header.php");
    $("#footer").load("data/footer.php");

    /***添加购物车***/
    $("#plist").on('click','a.addcart',function(e){
        e.preventDefault();
        var pid = $(this).attr("href");
        //发送ajax请求给服务器，执行添加操作
        $.ajax({
            'type':'POST',
            'url':'data/add_cart.php',
            data:{uid:getCookieVal("uid"),pid:pid},
            success:function(data){
                if(data>0){
                    alert("添加成功！该商品已购买"+data);
                }else{
                    alert("添加失败");
                }
            },
            error:function(){
                alert("添加商品出错，请检查网络!");
            }
        });
    });

    /***去购物车结算**/
    $(document.body).on('click','#my_js',function(e){
        e.preventDefault();
        location.href = '../shoppingcart.html';
    });

    /***分页处理***/
    $("ol.pager a").click(function(e){
        e.preventDefault();
        var p = $(this).html();
        loadPage(p);
    })


});

function getCookieVal(key){
    var rs = null;
    var line = document.cookie;
    var arr = line.split("; ");
    for(var i=0;i<arr.length;i++){
        var kv = arr[i];
        //第二次拆分
        var option = kv.split("=");
        var k = option[0].trim();//去除字符串前后的空格
        var v = option[1];
        if(key===k){
            return v;
        }
    }
    return rs;
}


