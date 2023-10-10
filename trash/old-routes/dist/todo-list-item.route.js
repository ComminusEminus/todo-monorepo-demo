"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listItemRouter = void 0;
var _controllers = require("@api/controllers");
var _express = require("express");
var _middlewares = require("@api/middlewares");
var listItemRouter = (0, _express.Router)();
exports.listItemRouter = listItemRouter;
listItemRouter.post("/create", _middlewares.verifyToken, function (req, res) {
  return _controllers.createNewListItemApi.execute(req, res);
});
listItemRouter.post("/delete", _middlewares.verifyToken, function (req, res) {
  return _controllers.deleteListItemApi.execute(req, res);
});
listItemRouter.post("/getById", _middlewares.verifyToken, function (req, res) {
  return _controllers.getListItemByIdApi.execute(req, res);
});
listItemRouter.post("/update", _middlewares.verifyToken, function (req, res) {
  return _controllers.updateListItemApi.execute(req, res);
});