const url =
  "https://hooks.slack.com/services/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";
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
