const winston = require("winston");
const config = require("config");
require("winston-mongodb");
require("express-async-errors");

module.exports = function() {
  winston.handleExceptions(
    new winston.transports.File({ filename: "uncaughtExceptions.log" })
  );

  process.on("unhandledRejection", ex => {
    throw ex;
  });

  winston.add(winston.transports.File, { filename: "logfile.log" });
  winston.add(winston.transports.MongoDB, {
    db: config.get("dbUrl"),
    level: "info"
  });
};

// with this setup our logs will now be written to our database files, i am currently using the same database to log
// errors as well, logging level is low, i dont want to overcrowd my database it is a small application, we dont want
// to go to a deep logging state ....
