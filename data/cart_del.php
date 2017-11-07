<?php
 header("Content-Type:application/json;charset=utf-8");
 @$id = $_REQUEST['id']or die ('{"code":-1,"msg":"删除编号不能为空"}');
 require('init.php');
 $sql = "DELETE FROM jd_cart WHERE id=$id";
 $result = mysqli_query($conn,$sql);
 echo '{"code":1,"msg":"删除成功"}';
?>