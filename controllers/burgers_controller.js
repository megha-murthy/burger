var express = require("express");

var router = express.Router();

var eat = require("../models/burger.js");

router.get("/", function(req, res) {
    eat.selectAll(function(data) {
      var hbsObject = {
        burger_name: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
router.post("/api/burgers",function(req,res){
    console.log("Reached here");
    console.log(req.body.burger_name);
    eat.insertOne([
        "burger_name","devoured"],[req.body.burger_name,req.body.devoured],
        function(result){
            console.log(result);
            res.json({id: result.insertId })
            
        });
  });


router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    eat.updateOne({
      devoured: 1
    }, condition, function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  module.exports = router;