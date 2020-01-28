// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // POST route for saving a new burgers
  app.post("/api/burgers", function(req, res) {
    console.log(req.body);
    
    db.Burger.create(req.body).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  // DELETE route for deleting burgers
  app.delete("/api/burgers/:id", function(req, res) {
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  // PUT route for updating burgers
  app.put("/api/burgers/:id", function(req, res) {
    console.log(req.body);
    
    db.Burger.update(
      req.body,
      {
        where: {
          id: req.params.id
        }
      }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });
};
