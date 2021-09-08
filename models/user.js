const Sequelize = new require('sequelize');
const db = require('../config/connection');
const DataTypes = require('sequelize/lib/data-types');

const User = db.define('user', {
    id: {
        type: DataTypes.INTEGER,
        field: 'u_id',
        primaryKey: true
    },
    name: DataTypes.STRING,
    is_admin: DataTypes.INTEGER,
    d_o_b: DataTypes.STRING,
    address: DataTypes.STRING,
    gender: DataTypes.STRING,
    tp_no: DataTypes.STRING,
    image: DataTypes.STRING,
    add_date: DataTypes.STRING,
    update_date: DataTypes.STRING
});

module.exports = User;

// CREATE TABLE `users` (
//     `u_id` int(5) NOT NULL AUTO_INCREMENT,
//     `name` varchar(45) DEFAULT NULL,
//     `is_admin` tinyint(4) DEFAULT '0',
//     `d_o_b` varchar(20) NOT NULL,
//     `address` varchar(100) NOT NULL,
//     `gender` varchar(30) DEFAULT NULL,
//     `tp_no` varchar(20) DEFAULT NULL,
//     `image` varchar(100) DEFAULT NULL,
//     `add_date` varchar(20) DEFAULT NULL,
//     `update_date` varchar(20) DEFAULT NULL,
//     PRIMARY KEY (`u_id`)
//     ) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=latin1;