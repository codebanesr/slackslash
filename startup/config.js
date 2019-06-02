var config = require("config");

module.exports = function() {
  if (!config.get("dbUrl")) {
    console.log("FATAL ERROR, database url string missing");
    process.exit(1);
  }
};
