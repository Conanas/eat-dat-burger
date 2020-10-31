const express = require("express");

const burger = require("../models/burger");

let router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        res.render("index", { burgers: data });
    })
})

// new burger
router.post("/api/burgers", function(req, res) {
    console.log("req.body= ", req.body)
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, false], function(data) {
        res.json({ id: data.insterId });
    })
})

// update burger
router.put("/api/burgers/:id", function(req, res) {
    let id = req.params.id;
    burger.updateOne([{ burger_name: req.body.burger_name, devoured: req.body.devoured }, id, function(err, data) {
        if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        res.status(200).end();
    }])
})

module.exports = router;