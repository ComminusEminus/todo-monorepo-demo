"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listItemRouter = void 0;
var _controllers = require("@api/controllers");
var _express = require("express");
var _entities = require("@core/entities");
var _middlewares = require("@api/middlewares");
var listItemRouter = (0, _express.Router)();
exports.listItemRouter = listItemRouter;
listItemRouter.post("/" + _entities.URLS.LIST_ITEM_ADD, _middlewares.verifyToken, _controllers.addNewListItem);
listItemRouter.post("/" + _entities.URLS.LIST_ITEM_DELETE, _middlewares.verifyToken, _controllers.deleteListItem);
listItemRouter.post("/" + _entities.URLS.LIST_ITEM_GETBYID, _middlewares.verifyToken, _controllers.getTodoListItemById);
listItemRouter.post("/" + _entities.URLS.LIST_ITEM_UPDATE, _middlewares.verifyToken, _controllers.updateListItem);