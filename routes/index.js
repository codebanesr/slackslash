var express = require("express");
var router = express.Router();

/* GET home page. */
router.post("/", function(req, res, next) {
  res.status(200).send("Post request @Home route");
});

router.get("/addtodo", function(req, res, next) {
  res.status(200).send("Hello there");
});

router.post("/addtodo", function(req, res, next) {
  res.status(200).send("Post request received at /addtodo");
});

module.exports = router;
