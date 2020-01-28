// Create a router via express
var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all

//Home page
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//Route to add a burger
router.post("/api/burgers", function(req, res) {
  burger.insertOne([
    "burger_name", "eaten"
  ], [
    req.body.name, req.body.eaten
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

//Route to move a burger to the eaten area
router.put("/api/burgers/:id", function(req, res) {
  var id = "id = " + req.params.id;

  burger.updateOne({
    eaten: req.body.eaten
  }, id, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });

  
});

//Route to delete a burger from the database
router.delete("/api/burgers/:id", function(req, res) {
  var id = req.params.id;

  
  burger.deleteOne(id, function(result) {
    
    if (result.affectedRows == 0) {
      
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });

  
});

// Export routes for server.js to use.
module.exports = router;
