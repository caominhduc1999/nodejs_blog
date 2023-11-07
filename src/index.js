const path = require("path");
const express = require("express");
var morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;
const route = require("./routes");
const db = require('./config/db');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, "public")));

// HTTP logger
app.use(morgan("combined"));

app.use(methodOverride('_method'));

// Template engine
app.engine("hbs", engine({ extname: ".hbs", defaultLayout: "main" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
