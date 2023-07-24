"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.todoListRouter = void 0;
var _express = require("express");
var _controllers = require("@api/controllers");
var todoListRouter = (0, _express.Router)();
exports.todoListRouter = todoListRouter;
todoListRouter.post('/add', _controllers.addNewTodoList);
todoListRouter.post('/delete', _controllers.deleteTodoList);
todoListRouter.get('/getById', _controllers.getTodoListById);
todoListRouter.get('/all', _controllers.getAllTodoLists);