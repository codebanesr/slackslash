const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");

router.post("/", async (req, res, next) => {
  try {
    let result = await Todo.findOneAndDelete({
      name: req.body.text,
      channel_id: req.body.channel_id
    });

    console.log(result);
    let payload = {
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
   res.json(payload)
  } catch (e) {
    return res.send(`Error Occured while trying to delete : ${req.body.text}`);
  }
});
module.exports = router;
