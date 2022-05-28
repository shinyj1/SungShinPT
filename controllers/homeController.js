"use strict";

exports.showscdl1 = (req, res) => {
  res.render("schedule1");
};

exports.showscdl2 = (req, res) => {
  res.render("schedule2");
};

exports.test = (req, res) => {
	const mysql = require('mysql2/promise');
	let test = async () => {
		const db = mysql.createPool({
			host: '34.64.52.97',
			user: 'cc',
			password: 'password',
			port: 3306,
			database: 'test_db',
			waitForConnections: true,
			insecureAuth: true
		});
		let sql = 'SELECT * FROM member';
		let [rows, fields] = await db.query(sql);
		res.render("test", {mail : rows[0].membermail});
	};
	test();
};