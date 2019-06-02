const mongoose = require("mongoose");
const config = require("config");

module.exports = function connect() {
  mongoose
    .connect(config.get("dbUrl"), { useNewUrlParser: true })
    .then(data => {
      console.log("Connected!!");
    })
    .catch(err => {
      console.log(err);
    });
};
