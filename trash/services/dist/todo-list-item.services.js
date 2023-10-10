"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapUpdateListItem = exports.mapNewTodoListItem = exports.mapFindByIdRequest = exports.mapDeleteRequest = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var mapNewTodoListItem = function mapNewTodoListItem(body) {
  var title = body.title,
    description = body.description,
    listId = body.listId;
  var error = false;
  if (!title || !description || !listId) {
    error = true;
  }
  var mongooseListId = new _mongoose["default"].Types.ObjectId(listId);
  return {
    title: title,
    description: description,
    listId: listId,
    error: error
  };
};
exports.mapNewTodoListItem = mapNewTodoListItem;
var mapDeleteRequest = function mapDeleteRequest(body) {
  var listId = body.listId,
    listItemId = body.listItemId;
  var error = false;
  if (!listId || !listItemId) {
    error = true;
  }
  var mongooseListId = new _mongoose["default"].Types.ObjectId(listId);
  var mongooseListItemId = new _mongoose["default"].Types.ObjectId(listItemId);
  return {
    listId: mongooseListId,
    listItemId: mongooseListItemId,
    error: error
  };
};
exports.mapDeleteRequest = mapDeleteRequest;
var mapFindByIdRequest = function mapFindByIdRequest(body) {
  var listItemId = body.listItemId;
  var error = false;
  if (!listItemId) {
    error = true;
  }
  var mongooseListItemId = new _mongoose["default"].Types.ObjectId(listItemId);
  return {
    id: mongooseListItemId,
    error: error
  };
};
exports.mapFindByIdRequest = mapFindByIdRequest;
var mapUpdateListItem = function mapUpdateListItem(body) {
  var _id = body._id,
    title = body.title,
    description = body.description,
    complete = body.complete;
  var error = false;
  if (!_id || !title || !description || !complete) {
    error = true;
  }
  var mongooseId = new _mongoose["default"].Types.ObjectId(_id);
  return {
    _id: mongooseId,
    title: title,
    description: description,
    complete: complete,
    error: error
  };
};
exports.mapUpdateListItem = mapUpdateListItem;