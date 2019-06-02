const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");
const postSlackMessage = require("../webhooks/post-webhook");

router.post("/", async (req, res, next) => {
  let todo = await Todo.find({ channel_id: req.body.channel_id }).select(
    "name created_by -_id"
  );

  // if the result is empty
  if (todo.length === 0) {
    let payload = {
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

    return res.json(payload);
  }

  // otherwise
  let out = "";
  todo.forEach(t => {
    out += t.name + "\n";
  });
  let payload = {
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

  res.json(payload);
});
module.exports = router;
