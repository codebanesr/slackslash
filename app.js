var createError = require("http-errors");
const express = require("express");
const app = express();

// seperation of concerns
require("./startup/logging");
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
