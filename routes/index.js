const express = require("express");
const router = express.Router();

/* GET home page. */

router.all("/", function(req, res, next) {
  res.render("index.jade", { title: "Homepage" });
});

module.exports = router;
