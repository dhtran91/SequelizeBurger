let express = require("express"),
    exphbs = require("express-handlebars"),
    bodyParser = require("body-parser");

let app = express();
let PORT = process.env.PORT || 8080;

//Requiring our models to sync
let db = require("./models");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
let routes = require("./controllers/burgersController.js");
app.use(routes);


db.sequelize.sync({force: true}).then(() => {
    app.listen(PORT, function() {
        console.log("Server listening on http://localhost/:" + PORT);
    });
});
