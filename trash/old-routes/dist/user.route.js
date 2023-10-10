"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRouter = void 0;
var _controllers = require("@api/controllers");
var _express = require("express");
var _middlewares = require("@api/middlewares");
var userRouter = (0, _express.Router)();
exports.userRouter = userRouter;
userRouter.post("/create", function (req, res) {
  return _controllers.createNewUserApi.execute(req, res);
});
userRouter.post("/login", function (req, res) {
  return _controllers.loginUserApi.execute(req, res);
});
userRouter.post("/update", _middlewares.verifyToken, function (req, res) {
  return _controllers.updateUserApi.execute(req, res);
});
userRouter.post("/logout", _middlewares.verifyToken, function (req, res) {
  return _controllers.logoutUserApi.execute(req, res);
});