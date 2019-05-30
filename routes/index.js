var express = require("express");
var router = express.Router();
const Todo = require("../models/todo");

/* GET home page. */

router.get("/", function(req, res, next) {
  res.json({
    message: "You are on the homepage"
  });
});

router.post("/", function(req, res, next) {
  res.send("Post request @Home route" + req.url);
});

router.post("/addtodo", async (req, res, next) => {
  // const { error } = validate(req.body);
  // if (error) return res.status(400).send(error.details[0].message);

  let todo = new Todo({
    name: req.body.text,
    created_by: "Shanur"
  });
  todo = await todo.save();

  res.send(todo);
});

// this has to be used to delete a task, takes one argument the name of the task
router.post("/marktodo", async (req, res, next) => {
  let result = await Todo.findOneAndDelete({ name: req.body.text });
  if (!result) {
    return res.send("Todo with the following name does not exist");
  }
  res.send(result);
});

router.post("/listtodo", async (req, res, next) => {
  let todo = await Todo.find({}).select("name created_by -_id");
  if (todo.length === 0) {
    return res.send("Your todo list is empty");
  }
  res.status(200).json(todo);
});

module.exports = router;
