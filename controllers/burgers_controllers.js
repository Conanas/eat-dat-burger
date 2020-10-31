const express = require("express");

const burger = require("../models/burger");

// assign the router function of the express module
let router = express.Router();

// home page route that gets all the burger information from the sql database
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        res.render("index", { burgers: data });
    })
})

// post route to create and add a new burger using the users inputs to go to the sql database
router.post("/api/burgers", function(req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, false], function(data) {
        res.json({ id: data.insterId });
    })
})

// put route to update a burger to have been devoured
router.put("/api/burgers/:id", function(req, res) {
    let id = req.params.id;
    let condition = `id=${id}`;
    burger.updateOne({ devoured: req.body.devoured }, condition, function(result) {
        if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        res.status(200).end();
    })
})

// export the router
module.exports = router;