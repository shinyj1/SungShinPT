"use strict";

const express = require("express"),
  app = express(),
  homeController = require("./controllers/homeController"),
  errorController = require("./controllers/errorController"),
  layouts = require("express-ejs-layouts"),
	path = require('path');

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.set("port", process.env.PORT || 80);
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());
app.use(layouts);
app.use(express.static("public"));

app.set('layout', 'layout');
app.set("layout extractScripts", true);

app.get("/", (req, res) => {
	res.render("index");
});

/*app.get("/schedule1", (req, res) => {
	res.render("schedule1");
});

app.get("/schedule2", (req, res) => {
	res.render("schedule2");
});*/

app.get("/schedule1", homeController.showscdl1);
app.get("/schedule2", homeController.showscdl2);
//app.post("/contact", homeController.postedSignUpForm);

/*const mysql = require('mysql2/promise');
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
	//console.log(rows);
	
	
};
test();*/
app.get("/test", homeController.test);

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
