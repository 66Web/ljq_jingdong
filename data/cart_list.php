<?php
  header("Content-Type:application/json;charset=utf-8");
  @$uid = $_REQUEST['uid']or die("-1");
  require('init.php');
  $sql = "SELECT c.id,p.pname,p.pic,p.price,c.count
   	FROM  jd_cart c,jd_product p
   	WHERE c.productid=p.pid
   	AND   c.uid = $uid";
  $result = mysqli_query($conn,$sql);
  $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
  $str = json_encode($rows);
  echo $str;

?>