// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

// burger will be exported to burgersController.js
var burger = {
   // Feed ORM methods the column names, values and have a call back function.

   // Get all the burgers
   selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },

  //create a new burger by giving the column names(cols) and their corresponding values(vals)
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },

  //change a burgers name by passing all row's values (burgerVals) and id
  updateOne: function(burgerVals, id, cb) {
    orm.updateOne("burgers", burgerVals, id, function(res) {
      cb(res);
    });
  },

  //delete a burger by it's unique id
  deleteOne: function(id, cb){
    orm.deleteOne("burgers", id, function (res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
