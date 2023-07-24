"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapTodoListDeleteRequest = exports.mapNewTodoList = exports.mapGetAllTodoListsRequest = exports.mapFindListByIdRequest = void 0;
var mapNewTodoList = function mapNewTodoList(body) {
  var listData = body.listData,
    userId = body.userId;
  return {
    title: listData.title,
    userId: userId
  };
};
exports.mapNewTodoList = mapNewTodoList;
var mapTodoListDeleteRequest = function mapTodoListDeleteRequest(body) {
  return {
    listId: body.listId,
    userId: body.userId
  };
};
exports.mapTodoListDeleteRequest = mapTodoListDeleteRequest;
var mapFindListByIdRequest = function mapFindListByIdRequest(body) {
  return {
    listId: body.listId
  };
};
exports.mapFindListByIdRequest = mapFindListByIdRequest;
var mapGetAllTodoListsRequest = function mapGetAllTodoListsRequest(body) {
  return {
    userId: body.userId
  };
};
exports.mapGetAllTodoListsRequest = mapGetAllTodoListsRequest;