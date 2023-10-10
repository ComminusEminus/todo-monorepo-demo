"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.todoListRouter = void 0;
var _express = require("express");
var _controllers = require("@api/controllers");
var _middlewares = require("@api/middlewares");
var todoListRouter = (0, _express.Router)();
exports.todoListRouter = todoListRouter;
todoListRouter.post("/create", _middlewares.verifyToken, function (req, res) {
  return _controllers.createNewListApi.execute(req, res);
});
todoListRouter.post("/delete", _middlewares.verifyToken, function (req, res) {
  return _controllers.deleteListApi.execute(req, res);
});
todoListRouter.post("/getAll", _middlewares.verifyToken, function (req, res) {
  return _controllers.getAllListsApi.execute(req, res);
});
todoListRouter.get("/getById", _middlewares.verifyToken, function (req, res) {
  return _controllers.getTodoListByIdApi.execute(req, res);
});