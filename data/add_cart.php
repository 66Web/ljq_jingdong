<?php
   header("Content-Type:text/plain;charset=utf-8");
   @$uid = $_REQUEST['uid']or die("-1");
   @$pid = $_REQUEST['pid']or die("-2");
   require("init.php");

   $sql = "SELECT * FROM jd_cart WHERE uid=$uid AND productid=$pid";
   $result = mysqli_query($conn,$sql);
   $row = mysqli_fetch_assoc($result);
   $count = 0;
   if($row===null){//��������ڣ���Ӽ�¼
      $sql = "INSERT INTO jd_cart VALUES(null,$uid,$pid,1)";
      $result = mysqli_query($conn,$sql);
      $count = 1;
   }else{//������ڣ����¼�¼
      $sql = "UPDATE jd_cart SET count=count+1 WHERE uid=$uid AND productid=$pid";
      $result = mysqli_query($conn,$sql);
      $count = $row['count']+1;
   }
   echo $count;//�����������

?>