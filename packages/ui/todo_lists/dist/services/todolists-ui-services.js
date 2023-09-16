"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapToListsDescription = exports.mapAddNewTodoListResponse = void 0;
var mapToListsDescription = function mapToListsDescription(response) {
  var data = response.data;
  var lists = data.lists,
    message = data.message,
    error = data.error;
  var userId = lists.userId,
    todoLists = lists.todoLists;
  if (!todoLists) {
    return [];
  }
  var mappedResponse = todoLists.map(function (list) {
    var _id = list._id,
      title = list.title,
      listItems = list.listItems;
    return {
      _id: _id,
      title: title,
      listItems: listItems
    };
  });
  return mappedResponse;
};
exports.mapToListsDescription = mapToListsDescription;
var mapAddNewTodoListResponse = function mapAddNewTodoListResponse(response) {
  var data = response.data;
  if (!data) {
    throw new Error('mapAddNewTodoListItemResponse cannot find data in response');
  }
  var message = data.message,
    error = data.error;
  if (!message) {
    throw new Error('Map Add New Todo List Response is missing message');
  }
  var mappedResponse = {
    message: message,
    errror: error
  };
  return mappedResponse;
};
exports.mapAddNewTodoListResponse = mapAddNewTodoListResponse;