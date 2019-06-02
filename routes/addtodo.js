var express = require("express");
var router = express.Router();
const Todo = require("../models/todo");
const postSlackMessage = require("../webhooks/post-webhook");

router.post("/", async (req, res, next) => {
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

module.exports = router;
