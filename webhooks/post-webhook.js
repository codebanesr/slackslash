const config = require("config");
const url = config.get("webhook");
const request = require("request");

module.exports = function postSlackMessage(body, req) {
  request.post(
    {
      url: req.body.response_url,
      json: body,
      headers: {
        "Content-Type": "application/json"
      }
    },
    function(error, response, body) {
      console.log(body);
    }
  );
};
