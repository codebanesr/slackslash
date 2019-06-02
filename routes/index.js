var express = require("express");
var router = express.Router();
const Todo = require("../models/todo");
const postSlackMessage = require("../webhooks/post-webhook");
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

  try {
    todo = await todo.save();
    var payload = {
      icon_emoji: ":smiley:",
      attachments: [
        {
          author_link: "https://github.com/shanurrahman",
          author_name: `${req.body.user_name}`,
          text: `Successfully Added Task : ${todo.name}`,
          mrkdwn_in: ["text", "pretext"],
          footer:
            "Adding CO2 to the air is like throwing another blanket on the bed!",
          footer_icon:
            "https://platform.slack-edge.com/img/default_application_icon.png",
          ts: +new Date(),
          color: "#07700b"
        }
      ]
    };
    postSlackMessage(payload);
    return res.end();
  } catch (e) {
    return res.send("Cannot add task, more information can be added here!!");
  }
});

router.post("/marktodo", async (req, res, next) => {
  try {
    let result = await Todo.findOneAndDelete({
      name: req.body.text,
      channel_id: req.body.channel_id
    });

    console.log(result);
    var payload = {
      icon_emoji: ":smiley:",
      attachments: [
        {
          author_link: "https://github.com/shanurrahman",
          author_name: `${req.body.user_name}`,
          text: `Deleted Task : ${result.name}`,
          mrkdwn_in: ["text", "pretext"],
          footer: "We Become What We Think About!",
          footer_icon:
            "https://platform.slack-edge.com/img/default_application_icon.png",
          ts: +new Date(),
          color: "#99131a"
        }
      ]
    };

    if (!result) {
      payload.attachments.text = `Task with name ${
        req.body.name
      } does not exist`;
    }
    postSlackMessage(payload);
    return res.end();
  } catch (e) {
    return res.send(`Error Occured while trying to delete : ${req.body.text}`);
  }
});

router.post("/listtodo", async (req, res, next) => {
  let todo = await Todo.find({ channel_id: req.body.channel_id }).select(
    "name created_by -_id"
  );

  // if the result is empty
  if (todo.length === 0) {
    var payload = {
      user_name: req.body.username,
      mrkdwn: false,
      icon_emoji: ":worried:",
      attachments: [
        {
          pretext: "*Empty Todo*",
          text: "Try entering tasks",
          mrkdwn_in: ["text", "pretext"],
          color: "#e8811b"
        }
      ]
    };

    postSlackMessage(payload);
    return res.end();
  }

  // otherwise
  let out = "";
  todo.forEach(t => {
    out += t.name + "\n";
  });
  var payload = {
    icon_emoji: ":smiley:",
    attachments: [
      {
        author_link: "https://github.com/shanurrahman",
        author_name: `${req.body.user_name}`,
        text: out,
        mrkdwn_in: ["text", "pretext"],
        footer: "We Become What We Think About!",
        footer_icon:
          "https://platform.slack-edge.com/img/default_application_icon.png",
        ts: +new Date(),
        color: "#16448e"
      }
    ]
  };

  postSlackMessage(payload);
  res.end();
});

module.exports = router;
