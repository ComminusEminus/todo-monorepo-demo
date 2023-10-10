"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapTodoListDeleteRequest = void 0;
var mapTodoListDeleteRequest = function mapTodoListDeleteRequest(body) {
  var listId = body.listId;
  var error = false;
  if (!listId) {
    error = true;
  }
  return {
    listId: listId,
    error: error
  };
};
exports.mapTodoListDeleteRequest = mapTodoListDeleteRequest;