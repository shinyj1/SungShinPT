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
	console.log(rows[0].membername);
	//console.log(fields);
};
test();
