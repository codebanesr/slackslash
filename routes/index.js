const express = require("express");
const router = express.Router();

/* GET home page. */

router.all("/", function(req, res, next) {
  res.json({
    message: "You are on the homepage"
  });
});

module.exports = router;
