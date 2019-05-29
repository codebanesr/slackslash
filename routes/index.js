var express = require("express");
var router = express.Router();
var items = [];
/* GET home page. */
router.post("/", function(req, res, next) {
  res.status(200).send("Post request @Home route" + req.url);
});

router.post("/addtodo", function(req, res, next) {
  let itemsArray = req.body.text.split(" ");
  items = items.concat(itemsArray);
  res.status(200).send(items);
});

router.post("/marktodo", function(req, res, next) {
  res.status(200).send("/marktodo POST");
});

router.post("/listtodo", function(req, res, next) {
  res.status(200).send(items);
});

router.post("/removetodo", function(req, res, next) {
  let delItem = req.body.text;
  items = items.filter(item => item !== delItem);

  res.status(200).send(items);
});

module.exports = router;
