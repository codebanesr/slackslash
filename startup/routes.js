var indexRouter = require("../routes/index");
var addtodoRouter = require("../routes/addtodo");
var marktodoRouter = require("../routes/marktodo");
var listtodoRouter = require("../routes/listtodo");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const express = require("express");

module.exports = function(app) {
  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "jade");

  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, "public")));

  app.use("/", indexRouter);
  app.use("/marktodo", marktodoRouter);
  app.use("/listtodo", listtodoRouter);
  app.use("/addtodo", addtodoRouter);
};
