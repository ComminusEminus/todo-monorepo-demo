"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapToListDescription = exports.mapAddNewTodoListItemResponse = exports.filterIncompleteListItems = exports.filterCompletedListItems = void 0;
var _entities = require("@core/entities");
var mapToListDescription = function mapToListDescription(response) {
  var data = response.data;
  var list = data.list,
    message = data.message,
    error = data.error;
  if (!list) {
    throw new Error('mapToListDescription cannot find todoListsItem data');
  }
  var _id = list._id,
    title = list.title,
    listItems = list.listItems;
  console.log(listItems);
  if (listItems.length === 0) {
    var _mappedResponse = {
      list: [],
      message: message,
      error: error
    };
    return _mappedResponse;
  }
  var mappedList = listItems.map(function (list) {
    return {
      _id: list._id,
      title: list.title,
      description: list.description,
      complete: list.complete
    };
  });
  var mappedResponse = {
    list: mappedList,
    message: message,
    error: error
  };
  return mappedResponse;
};
exports.mapToListDescription = mapToListDescription;
var mapAddNewTodoListItemResponse = function mapAddNewTodoListItemResponse(response) {
  var data = response.data;
  if (!data) {
    throw new Error('mapAddNewTodoListItemResponse cannot find data in response');
  }
  var message = data.message,
    error = data.error;
  if (!message) {
    throw new Error('Map Add New Todo List Item Response is missing message');
  }
  var mappedResponse = {
    message: message,
    errror: error
  };
  return mappedResponse;
};
exports.mapAddNewTodoListItemResponse = mapAddNewTodoListItemResponse;
var filterCompletedListItems = function filterCompletedListItems(todoListItems) {
  var filteredList = todoListItems.filter(function (listItem) {
    if (listItem.complete === _entities.CompleteState.COMPLETED) {
      return listItem;
    }
  });
  return filteredList;
};
exports.filterCompletedListItems = filterCompletedListItems;
var filterIncompleteListItems = function filterIncompleteListItems(todoListItems) {
  var filteredList = todoListItems.filter(function (listItem) {
    if (listItem.complete === _entities.CompleteState.INCOMPLETE) {
      return listItem;
    }
  });
  return filteredList;
};
exports.filterIncompleteListItems = filterIncompleteListItems;