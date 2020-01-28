// Dependencies
var express = require("express");

// Set up the Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Requiring our models for syncing
var db = require("./models");

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    console.log("http://localhost:" + PORT);
    
  });
});

// Burger names
// Pepper Don't Preach Burger
// Rest in Peas Burger
// Mission A-Corn-Plished Burger
// Tunami 
// Foot Feta-ish Burger
// New Bacon-ings