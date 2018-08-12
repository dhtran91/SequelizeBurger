var express = require("express");
var router = express.Router();
var db = require("../models");


// GET: /
router.get("/", (req, res) => {
    db.Burgers.findAll().then((dbBurger) => {
        let hbObj = {
            burgers: dbBurger
        }
        res.render("index", hbObj)
    });
});

// GET: api/burgers
router.get("/api/burgers", (req, res) => {
    db.Burgers.findAll().then((dbBurger) => {
        console.log(dbBurger);
        res.json(dbBurger);
    });
});

// POST: api/burgers
router.post("/api/burgers", (req, res) => {
    db.Burgers.create({
        burger_name: req.body.burgerName
    }).then((dbBurger) => {
        res.json(dbBurger)
    })
});

// PUT: api/burgers/:id
router.put("/api/burgers/:id", (req, res) => {
    db.Burgers.update({
        burger_name: req.body.burgerName,
        devoured: req.body.devoured
    }, {
        where: {id: req.params.id}
    }).then((dbBurger)=> {
        if(dbBurger.changedRows == 0) {
            return res.status(404);
        } else {
            res.status(200);
            res.json(dbBurger);
        }

    })    
});

// DELETE: api/burgers
router.delete("/api/burgers", (req, res) => {
    db.Burgers.destroy({
        where: {id: req.body.id}
    }).then((dbBurger) => {
        if(dbBurger.changedRows == 0) {
            return res.status(404);
        } else {
            res.status(200);
            res.json(dbBurger);
        }
    })
})


module.exports = router;