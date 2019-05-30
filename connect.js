const mongoose = require("mongoose");
const dbUrl = `mongodb://dev:devkumar123@ds117422.mlab.com:17422/datavalidation`;

module.exports = function connect() {
  mongoose
    .connect(dbUrl, { useNewUrlParser: true })
    .then(data => {
      console.log("Connected!!");
    })
    .catch(err => {
      console.log(err);
    });
};
