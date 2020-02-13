const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", (req, res) => {
    burger.selectAll((data) => {
        var burgerObj = {
            burgers: data
        };
        res.render("index", burgerObj);
    });
});

router.post("/api/burger", (req, res) => {
    burger.insertOne([
        "burger_name"
    ], [
        req.body.name
    ], (result) => {
        res.json({id: result.insertId});
    });
});

router.put("/api/burger/:id", (req, res) => {
    let condition = "id = " + req.params.id;

    burger.updateOne({
        devoured: true
    }, condition, (result) => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    });
});

module.exports = router;