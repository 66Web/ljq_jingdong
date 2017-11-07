$(function(){
    /***加载头文件  header.php***/
    /***加载脚文件  footer.php***/
    $("#header").load("data/header.php");
    $("#footer").load("data/footer.php");

    /***页面加载后，异步请求当前登录用户购物车中商品信息***/
    $.ajax({
        url:"data/cart_list.php",
        data:{uid:getCookieVal("uid")},
        success:function(data){
            var html = "";
            for(var i=0;i<data.length;i++){
                var obj = data[i];
                html +=`
               <tr>
                    <td>
                        <input type="checkbox"/>
                        <input type="hidden" value="${obj.pid}" />
                        <div><img src="${obj.pic}" alt=""/></div>
                    </td>
                    <td><a href="">${obj.pname}</a></td>
                    <td>${obj.price}</td>
                    <td>
                        <button>-</button><input type="text" value="${obj.count}"/><button>+</button>
                    </td>
                    <td><span>￥${obj.price*obj.count}</span></td>
                    <td><a href="${obj.id}">删除</a></td>
                </tr>
            `;
            }
            $("#cart tbody").html(html);
        },
        error:function(){
        }
    });

    /***删除购物车选项***/
    $("#cart tbody").on("click","a:contains('删除')",function(e){
        e.preventDefault();
        var did = $(this).attr("href");
        //留存this-->a  后面会变
        var that = this;//that -->a
        $.ajax({
            type:"POST",
            url:"data/cart_del.php",
            data:{id:did},
            success:function(data){
                if(data.code<0){
                    alert("删除失败：原因"+data.msg);
                }else{
                    alert("删除成功");
                    $(that).parent().parent().remove();
                }
            },
            error:function(){
                alert("删除失败，请检查网络");
            }
        });
    });

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
