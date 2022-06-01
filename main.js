const express = require("express"),
  app = express(),
  homeController = require("./controllers/homeController"),
  scheduleController = require("./controllers/scheduleController"),
  errorController = require("./controllers/errorController"),
  layouts = require("express-ejs-layouts"),
	path = require('path'),
  db = require("./models/index"),
  models = require("./models");

db.sequelize.sync();

app.set("view engine", "ejs");
app.set("port", process.env.PORT || 80);
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());
app.use(layouts);
app.use(express.static("public"));

app.get("/", (req, res) => {
	res.render("index");
});

app.get("/addSchedule",scheduleController.addSchedule);
app.post("/addScheduleClear", scheduleController.addScheduleClear)
//app.get("/schedule1", scheduleController.testScdl);
//app.get("/schedule2", homeController.showscdl2);
//app.post("/addSchedule1", scheduleController.saveScdl1);
//app.post("/addScheduleClear", scheduleController.addSchedule);

app.get("/test", homeController.testEnv);

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});