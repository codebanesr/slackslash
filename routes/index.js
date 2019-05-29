var express = require("express");
var router = express.Router();

/* GET home page. */
router.post("/", function(req, res, next) {
  res.status(200).send("Post request @Home route" + req.url);
});

router.post("/addtodo", function(req, res, next) {
  res.status(200).send("/addtodo POST");
});



router.post("/marktodo", function (req, res, next) {
  res.status(200).send("/marktodo POST");
})

router.post("/listtodo", function (req, res, next) {
  res.status(200).send("/listtodo POST");
})


module.exports = router;
