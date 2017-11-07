<?php
  header("Content-Type:application/json;charset=utf-8");
  require('init.php');
  //获取参数：页面
  @$pageNo = $_REQUEST['pageNo'];
  $offset = ($pageNo-1)*8;
  $sql = "SELECT * FROM jd_product LIMIT $offset,8";
  $result = mysqli_query($conn,$sql);
  $row = mysqli_fetch_all($result,MYSQLI_ASSOC);
  $str = json_encode($row);
  echo $str;
?>