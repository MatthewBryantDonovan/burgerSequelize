// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

    // index route loads view.html
    app.get("/", function (req, res) {
        console.log("asdfkjhaskdjkjladsflkashjdflkajshdflkajshdflkashjdflkahs");
        
        db.Customer.findAll().then(function (dbCustomer) {
            db.Burger.findAll().then(function (dbBurger) {
                for (let indexa = 0; indexa < dbCustomer.length; indexa++) {
                    dbCustomer[indexa].Burgers = [];
                    dbCustomer[indexa].HaveOrder = false;
                    dbCustomer[indexa].HaveReorder = false;
                    for (let indexb = 0; indexb < dbBurger.length; indexb++) {
                        if (dbBurger[indexb].CustomerId == dbCustomer[indexa].id) {
                            dbCustomer[indexa].Burgers.push(
                            {
                                burger_name: dbBurger[indexb].burger_name,
                                eaten: dbBurger[indexb].eaten,
                                id: dbBurger[indexb].id

                            });
                            
                            if(dbBurger[indexb].eaten == true){
                                dbCustomer[indexa].HaveReorder = true;
                            } else if(dbBurger[indexb].eaten == false){
                                dbCustomer[indexa].HaveOrder = true;
                            }
                        } // end if

                    } // end b for
                }

                var hbsObject = {
                    customers: dbCustomer
                };

                
                res.render("index", hbsObject);
            });
        });
    });

    // POST route for saving a new burgers
    app.post("/api/burgers", function (req, res) {

        db.Customer.create({
            customer_name: req.body.customer_name,
            createdAt: req.body.createdAt,
            updateAt: req.body.updateAt
        }).then(function (dbCustomer) {

            console.log(dbCustomer);


            db.Burger.create({
                burger_name: req.body.burger_name,
                eaten: req.body.eaten,
                createdAt: req.body.createdAt,
                updateAt: req.body.updateAt,
                CustomerId: dbCustomer.id
            }).then(function (dbBurger) {
                res.json(dbBurger);
            });
        });

    });

    // DELETE route for deleting burgers
    app.delete("/api/burgers/:id", function (req, res) {
        db.Burger.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbBurger) {
            res.json(dbBurger);
        });
    });

    // DELETE route for deleting customer
    app.delete("/api/customers/:id", function (req, res) {
        db.Customer.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbCustomer) {
            res.json(dbCustomer);
        });
    });

    // PUT route for updating burgers
    app.put("/api/burgers/:id", function (req, res) {
        console.log(req.body);

        db.Burger.update(
            req.body, {
                where: {
                    id: req.params.id
                }
            }).then(function (dbBurger) {
            res.json(dbBurger);
        });
    });
};