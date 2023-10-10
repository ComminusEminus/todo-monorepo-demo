"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapTodoListDeleteRequest = exports.mapNewTodoList = exports.mapFindListByIdRequest = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var mapNewTodoList = function mapNewTodoList(body) {
  var title = body.title;
  var error = false;
  if (!title) {
    error = true;
  }
  return {
    title: title,
    error: error
  };
};
exports.mapNewTodoList = mapNewTodoList;
var mapTodoListDeleteRequest = function mapTodoListDeleteRequest(body) {
  var listId = body.listId;
  var error = false;
  if (!listId) {
    error = true;
  }
  var mongooseListId = new _mongoose["default"].Types.ObjectId(listId);
  return {
    listId: mongooseListId,
    error: error
  };
};
exports.mapTodoListDeleteRequest = mapTodoListDeleteRequest;
var mapFindListByIdRequest = function mapFindListByIdRequest(body) {
  var listId = body.listId;
  console.log("mapFindListByIdRequest-todo-list-services: body(below): ");
  console.log(body);
  var error = false;
  if (!listId) {
    error = true;
  }
  var mongooseListId = new _mongoose["default"].Types.ObjectId(listId);
  return {
    listId: mongooseListId,
    error: error
  };
};
exports.mapFindListByIdRequest = mapFindListByIdRequest;