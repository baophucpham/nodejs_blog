const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();
const handlebars = require("express-handlebars");
const port = 3000;

//http logger
app.use(morgan("combined"));
//Template engine
app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");
app.set("view", path.join(__dirname, "resources/views"));

// Đây là router
app.get("/", (req, res) =>{return res.render("home")});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
