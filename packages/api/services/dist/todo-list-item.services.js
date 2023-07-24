"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapUpdateListItemBody = exports.mapUpdateListItem = exports.mapNewTodoListItem = exports.mapFindByIdRequest = exports.mapDeleteRequest = void 0;
var mapNewTodoListItem = function mapNewTodoListItem(body) {
  return {
    title: body.title,
    description: body.description,
    listId: body.listId
  };
};
exports.mapNewTodoListItem = mapNewTodoListItem;
var mapDeleteRequest = function mapDeleteRequest(body) {
  return {
    listId: body.listId,
    listItemId: body.listItemId
  };
};
exports.mapDeleteRequest = mapDeleteRequest;
var mapFindByIdRequest = function mapFindByIdRequest(body) {
  return {
    todoListItemId: body.todoListItemId
  };
};
exports.mapFindByIdRequest = mapFindByIdRequest;
var mapUpdateListItemBody = function mapUpdateListItemBody(body) {
  return {
    listItem: body.listItem,
    update: body.update,
    userId: body.userId
  };
};
exports.mapUpdateListItemBody = mapUpdateListItemBody;
var mapUpdateListItem = function mapUpdateListItem(update) {
  return {
    _id: update._id,
    title: update.title,
    description: update.description,
    complete: update.complete
  };
};
exports.mapUpdateListItem = mapUpdateListItem;