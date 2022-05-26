const express = require("express"),
  app = express(),
  homeController = require("./controllers/homeController"),
  errorController = require("./controllers/errorController"),
  layouts = require("express-ejs-layouts"),
	path = require('path');

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

app.get("/schedule1", homeController.showscdl1);
app.get("/schedule2", homeController.showscdl2);

app.get("/test", homeController.test);

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});