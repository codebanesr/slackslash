var express = require("express");
var router = express.Router();
const Todo = require("../models/todo");
const postWebhook = require("../webhooks/post-webhook");
/* GET home page. */

router.all("/", function(req, res, next) {
  res.json({
    message: "You are on the homepage"
  });
});

router.post("/addtodo", async (req, res, next) => {
  // const { error } = validate(req.body);
  // if (error) return res.status(400).send(error.details[0].message);

  console.log(req.body);
  let todo = new Todo({
    name: req.body.text,
    channel_id: req.body.channel_id
  });

  todo = await todo.save();
  res.send(todo);
});

router.post("/marktodo", async (req, res, next) => {
  let result = await Todo.findOneAndDelete({
    name: req.body.text,
    channel_id: req.body.channel_id
  });
  if (!result) {
    return res.send("Todo with the following name does not exist");
  }
  res.send(result);
});

router.post("/listtodo", async (req, res, next) => {
  let todo = await Todo.find({ channel_id: req.body.channel_id }).select(
    "name created_by -_id"
  );
  if (todo.length === 0) {
    var payload = {
      icon_emoji: ":worried:",
      text: "Your Todo List is empty"
    };

    postWebhook(payload);
    return res.end();
  }
  res.status(200).json(todo);
});

module.exports = router;
