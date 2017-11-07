DROP DATABASE IF EXISTS jd;
CREATE DATABASE jd CHARSET=UTF8;
USE jd;

/**�û���¼��**/
CREATE TABLE t_login(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd  VARCHAR(32)
);
INSERT INTO t_login VALUES
(10,'zhangsan','123456'),
(20,'lisi','123456'),
(30,'wangwu','123456');

/**��Ʒ��Ϣ��**/
CREATE TABLE jd_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  pname VARCHAR(64),
  price FLOAT(8,2),
  pic VARCHAR(32)
);
INSERT INTO jd_product VALUES
(1,'С�� Note ȫ��ͨ ��ɫ �ƶ���ͨ����4G�ֻ� ˫��˫��',1199.00,'images/phone/phone_01.jpg'),
(2,'Apple iPhone 6s (A1700) 16G õ���ɫ �ƶ���ͨ����4G�ֻ�',3999.00,'images/phone/phone_02.jpg'),
(3,'PPO R9 4GB+64GB�ڴ�� õ��� ȫ��ͨ4G�ֻ� ˫��',2499.00,'images/phone/phone_03.jpg'),
(4,'С�� ���� 3S ����ȫ��ͨ 3GB�ڴ� 32GB ROM �����ɫ',899.00,'images/phone/phone_04.jpg'),
(5,'����M6 Plus ���Ľ� 4GB+64GB�� �ƶ���ͨ����4G�ֻ� ˫��˫��',2999.00,'images/phone/phone_05.jpg'),
(6,'Apple iPhone 6s Plus (A1699) 64G õ���ɫ �ƶ���ͨ����4G�ֻ�',5799.00,'images/phone/phone_06.jpg'),
(7,'vivo X7 ȫ��ͨ 4GB+64GB �ƶ���ͨ����4G�ֻ� ˫��˫��',2499.00,'images/phone/phone_07.png'),
(8,'С�� ����Note3 ����ȫ��ͨ�� 3GB+32GB ��ɫ �ƶ���ͨ����4G�ֻ�',1099.00,'images/phone/phone_08.jpg'),
(9,'���������������¡���ҫ8 4GB+32GB ȫ��ͨ�� �Ⱥ��� ˫��ͷ��˫2.5D����',2499.00,'images/phone/phone_09.jpg'),
(10,'��ҫ7 (PLK-AL10) 3GB+64GB�ڴ�� ��ҫ�� �ƶ���ͨ����4G�ֻ�',1799.00,'images/phone/phone_10.jpg'),
(11,'��ҫ V8 ȫ��ͨ ����� 4GB+64GB ���Ľ� �ƶ���ͨ����4G�ֻ� ˫��˫��˫ͨ',2799.00,'images/phone/phone_11.jpg'),
(12,'��ҫ ����5X 3GB�ڴ�� ���ս� �ƶ���ͨ����4G�ֻ� ˫��˫�� �ſ�ָ��',1099.00,'images/phone/phone_12.jpg'),
(13,'Apple iPhone 6 (A1586) 64GB ��ɫ �ƶ���ͨ����4G�ֻ�',4199.00,'images/phone/phone_13.jpg'),
(14,'TCL ���� 750 �Ž� �ƶ���ͨ����4G�ֻ� ˫��˫�� ����1600�������������գ�',4199.00,'images/phone/phone_14.jpg'),
(15,'��Ϊ P9 plus 64GB ����� �ƶ���ͨ����4G�ֻ� ˫��˫��',3988.00,'images/phone/phone_15.jpg'),
(16,'Apple iPhone 5s (A1530) 16GB ��ɫ �ƶ���ͨ4G�ֻ�',2198.00,'images/phone/phone_16.jpg'),
(17,'vivo X7Plus ȫ��ͨ 4GB+64GB �ƶ���ͨ����4G�ֻ� ˫��˫�� ��ɫ',2798.00,'images/phone/phone_17.jpg'),
(18,'��Ϊ ����5S ��ɫ �ƶ���ͨ����4G�ֻ� ˫��˫�� 10������ֻ���',1099.00,'images/phone/phone_18.jpg'),
(19,'Apple iPhone 6 Plus (A1524) 16GB ��ɫ �ƶ���ͨ����4G�ֻ�',3899.00,'images/phone/phone_19.jpg'),
(20,'��Ϊ ��â5 ȫ��ͨ 4GB+64GB�� ���Ľ� �ƶ���ͨ����4G�ֻ� ˫��˫��',2599.00,'images/phone/phone_20.jpg'),
(21,'С��5 ȫ��ͨ ��׼�� 3GB�ڴ� 32GB ROM ��ɫ �ƶ���ͨ����4G�ֻ�',1799.00,'images/phone/phone_21.jpg'),
(22,'��Ϊ P9 ȫ��ͨ 3GB+32GB�� ����� �ƶ���ͨ����4G�ֻ� ˫��˫�� ����955',3188.00,'images/phone/phone_22.jpg'),
(23,'���� ��� ��׼�� ��ʿ�� �ƶ���ͨ����4G�ֻ� ˫��˫�� 4Gȫ��ͨ',999.00,'images/phone/phone_23.jpg'),
(24,'360�ֻ� N4 ȫ��ͨ 4GB+32GB ����� �ƶ���ͨ����4G�ֻ� ˫��˫��',999.00,'images/phone/phone_24.jpg'),
(25,'С�� Max ȫ��ͨ ��׼�� 3GB�ڴ� 32GB ROM ��ɫ �ƶ���ͨ����4G�ֻ�',1299.00, 'images/phone/phone_25.jpg'),
(26,'��Ϊ P9 ȫ��ͨ 4GB+64GB�� ��ɫ �ƶ���ͨ����4G�ֻ� ˫��˫�� ����1200��',3688.00, 'images/phone/phone_26.jpg'),
(27,'���ӣ�Le����2��X620��32GB ԭ���� �ƶ���ͨ����4G�ֻ� ˫��˫�� 5.5Ӣ��',988.00,'images/phone/phone_27.jpg'),
(28,'Ŭ����(nubia)��3+64GB��Сţ5 Z11mini ��ɫ �ƶ���ͨ����4G�ֻ�',1299.00, 'images/phone/phone_28.jpg'),
(29,'���ӣ�Le����2Pro 32GB ��ɫ �ƶ���ͨ����4G�ֻ� ˫��˫�� 5.5Ӣ��In-Cell��',1399.00,'images/phone/phone_29.jpg'),
(30,'��Ϊ Mate 8 3GB+32GB�� õ��� �ƶ���ͨ����4G�ֻ� ˫��˫�� ����950оƬ',2799.00, 'images/phone/phone_30.jpg'),
(31,'С�� 4c ��׼�� ȫ��ͨ ��ɫ �ƶ���ͨ����4G�ֻ� ˫��˫�� ��ͨ����808������',799.00,'images/phone/phone_31.jpg'),
(32,'vivo X7 ȫ��ͨ 4GB+64GB �ƶ���ͨ����4G�ֻ� ˫��˫�� �ǿջ� vivox7',2498.00, 'images/phone/phone_32.jpg'),
(33,'���� ����3 ��K32C36��16GB ��ɫ �ƶ�4G�ֻ� ˫��˫�� �����¾�����',599.00,'images/phone/phone_33.jpg'),
(34,'��Ϊ ��ҫ ����4X ���ؽ� �ƶ���ͨ����4G�ֻ� ˫��˫�� 5.5Ӣ�������Ƭ����',749.00,'images/phone/phone_34.jpg'),
(35,'���� Galaxy On5��G5500����ɫ �ƶ���ͨ4G�ֻ� ��Ƥ�ʸк�ǣ�2600����������',699.00,'images/phone/phone_35.jpg'),
(36,'OPPO A37 2GB+16GB�ڴ�� õ��� ȫ��ͨ4G�ֻ� ˫��˫�� ����Ʒ����ѡ��',1299.00,'images/phone/phone_36.jpg');


/***���ﳵ��***/
CREATE TABLE jd_cart(
  id      INT PRIMARY KEY AUTO_INCREMENT,
  uid     INT,
  productid INT,
  count   INT
);
INSERT INTO jd_cart VALUES(null,10,1,2);
INSERT INTO jd_cart VALUES(null,10,2,1);

/***������***/
CREATE TABLE jd_order(
  oid      INT PRIMARY KEY AUTO_INCREMENT,
  rcvName  VARCHAR(16),
  price    DECIMAL(9,2),
  payment  INT,   #1-�������� 2-���߸��� 3-������֧��
  orderTime  BIGINT,
  status   INT,    #1-�ȴ�����  2-�ɻ���  3-������  4-�������
  userId   INT
);
INSERT INTO jd_order VALUES
(NULL,'��',820,1,1381234567890,1,10),
(NULL,'����',810,2,1351234567890,2,10),
(NULL,'����',830,3,1391234567890,3,10),
(NULL,'���',850,1,1311234567890,4,10),
(NULL,'Ǯ���',860,2,1771234567890,1,10),
(NULL,'����',870,3,1781234567890,2,10),
(NULL,'��¶¶',880,1,1358234567890,3,10),
(NULL,'����',890,2,1305534567890,4,10),
(NULL,'��ѩ',960,3,1301774567890,1,10),
(NULL,'��÷',980,1,1381274567890,2,10),
(NULL,'�ŷ�',870,2,1351234127890,3,10),
(NULL,'�̹���',850,3,1311258567890,4,10),
(NULL,'�ܸ�',960,1,1371234757890,1,10),
(NULL,'Ф��',950,2,1381237567890,2,10),
(NULL,'�ŷ�',940,3,1351238767890,3,10),
(NULL,'Ҷһ��',870,1,1771454567890,4,10),
(NULL,'����',890,2,1781237867890,1,10),
(NULL,'����',920,3,1361231557890,2,10),
(NULL,'÷��',870,1,1381234777890,3,10),
(NULL,'֣��',960,2,1381234657890,4,10),
(NULL,'������',880,3,1391984567890,1,10),
(NULL,'л��',890,1,1311234467890,2,10),
(NULL,'���ܸ�',790,2,1381255567890,3,10),
(NULL,'������',900,3,1371276567890,4,10);

/***���������***/
CREATE TABLE jd_order_detail(
  did  INT PRIMARY KEY AUTO_INCREMENT,
  orderId  INT,
  productid INT,
  count INT
);
INSERT INTO jd_order_detail VALUES
(NULL, 1, 10, 1),
(NULL, 1, 15, 1),
(NULL, 2, 11, 1),
(NULL, 3, 12, 1),
(NULL, 3, 16, 1),
(NULL, 3, 21, 1),
(NULL, 4, 5, 1),
(NULL, 5, 30, 1),
(NULL, 5, 18, 1),
(NULL, 6, 7, 1),
(NULL, 7, 1, 1),
(NULL, 8, 12, 1),
(NULL, 8, 18, 1),
(NULL, 9, 21, 1),
(NULL, 10, 11, 1),
(NULL, 11, 22, 1),
(NULL, 11, 10, 1),
(NULL, 12, 10, 1),
(NULL, 13, 19, 1),
(NULL, 13, 28, 1),
(NULL, 13, 21, 1),
(NULL, 14, 1, 1),
(NULL, 14, 2, 1),
(NULL, 15, 8, 1),
(NULL, 16, 7, 1),
(NULL, 16, 17, 1),
(NULL, 17, 8, 1),
(NULL, 17, 9, 1),
(NULL, 18, 10, 1),
(NULL, 19, 19, 1),
(NULL, 19, 3, 1),
(NULL, 20, 1, 1),
(NULL, 21, 15, 1),
(NULL, 21, 18, 1),
(NULL, 22, 1, 1),
(NULL, 22, 31, 1),
(NULL, 23, 18, 1),
(NULL, 23, 3, 1),
(NULL, 24, 27, 1),
(NULL, 24, 25, 1);


/***�齱��¼��***/
CREATE TABLE jd_lottery(
   lid INT PRIMARY KEY AUTO_INCREMENT,
   userId INT,
   level INT, #1-һ�Ƚ� 2-���Ƚ� 3-���Ƚ� 4-�ĵȽ�
   lotteryTime BIGINT
);
INSERT INTO jd_lottery VALUES
(NULL, 10, 3, 1391234567890),
(NULL, 10, 2, 1371234567890),
(NULL, 10, 4, 1381234567890);