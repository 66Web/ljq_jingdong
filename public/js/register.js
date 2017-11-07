//监听“注册”按钮的单击事件
$('#bt-register').click(function(){
    var n = $('#uname').val();//用户名
    var p = $('#upwd').val();//密码
    //将客户端数据异步提交给服务器
    $.ajax({
        type:'POST',
        url:'/user/register',
        data:{uname:n,upwd:p},
        success:function(result){
           if(result.code===1){
               alert('注册成功！3s后自动跳转到登录页面...')
               setTimeout(function(){
                   location.href='login.html';
               },3000);
           }else{
               alert('注册失败！请稍后重试！')
           }
        },
        error:function(result){}
    })
});
