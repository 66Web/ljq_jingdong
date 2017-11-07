//监听“登录”按钮的单击事件
$('#bt-login').click(function(){
    var n = $('#uname').val();
    var p = $('#upwd').val();
    //提交异步请求，把登录信息提交给Web服务器
    $.ajax({
        type:'POST',
        url:'/user/login',
        data:{uname:n, upwd:p},
        success:function(result){
            if(result.code===1){
                alert('登录成功！3s后自动跳转到用户中心');
                //在客户端存储会话级别的数据：loginUname,loginUid
                sessionStorage['loginUname']=n;
                sessionStorage['loginUid']=result.uid;
                location.href = 'usercenter.html';
            }else{
                alert('登录失败！原因:'+result.msg);
            }
        },
        error:function(result){
        }
    });
});
