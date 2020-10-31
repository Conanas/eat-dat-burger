const express = require("express");

// port for server
// either relative port or local port
var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import routes and give the server access to them
var routes = require("./controllers/burgers_controllers.js");

app.use(routes);

// start server to listen for requests from the user
app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
});