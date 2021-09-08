use userms_db;
CREATE TABLE `users` (
  `u_id` int(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `is_admin` tinyint(4) DEFAULT '0',
  `d_o_b` varchar(20) NOT NULL,
  `address` varchar(100) NOT NULL,
  `gender` varchar(30) DEFAULT NULL,
  `tp_no` varchar(20) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `add_date` varchar(20) DEFAULT NULL,
  `update_date` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`u_id`)
  ) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=latin1;
  drop table users;
  INSERT INTO `users` VALUES 
  (1,'userX',1,'12/30/1995','Baddegama','male','0715823114','http://localhost:5000/images/userx.png','12/12/2020 10:15:11','12/12/2020 10:15:11'),
  (2,'userY',0,'10/04/2001','Colombo','male','0716823125','http://localhost:5000/images/usery.png','05/30/2020 13:15:11','06/18/2020 13:15:11'),
  (3,'userZ',0,'10/04/1998','Ampara','female','0716521320','http://localhost:5000/images/userz.png','02/10/2020 12:15:11','06/18/2020 13:15:11')
