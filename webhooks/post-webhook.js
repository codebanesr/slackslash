const config = require("config");
const url = config.get("webhook");
const request = require("request");

module.exports = function postSlackMessage(body, res) {
  request.post(
    {
      url: url,
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
