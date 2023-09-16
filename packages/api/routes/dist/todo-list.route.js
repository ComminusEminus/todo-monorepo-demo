"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.todoListRouter = void 0;
var _express = require("express");
var _controllers = require("@api/controllers");
var _entities = require("@core/entities");
var _middlewares = require("@api/middlewares");
var todoListRouter = (0, _express.Router)();
exports.todoListRouter = todoListRouter;
todoListRouter.post("/" + _entities.URLS.LIST_ADD, _middlewares.verifyToken, _controllers.addNewTodoList);
todoListRouter.post("/" + _entities.URLS.LIST_DELETE, _middlewares.verifyToken, _controllers.deleteTodoList);
todoListRouter.post("/" + _entities.URLS.LIST_GETBYID, _middlewares.verifyToken, _controllers.getTodoListById);
todoListRouter.get("/" + _entities.URLS.LIST_ALL, _middlewares.verifyToken, _controllers.getAllTodoLists);