"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listItemRouter = void 0;
var _controllers = require("@api/controllers");
var _express = require("express");
var listItemRouter = (0, _express.Router)();
exports.listItemRouter = listItemRouter;
listItemRouter.post('/add', _controllers.addNewListItem);
listItemRouter.post('/delete', _controllers.deleteListItem);
listItemRouter.get('/getById', _controllers.getTodoListItemById);
listItemRouter.put('/update', _controllers.updateListItem);