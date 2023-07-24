"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapToListDescription = exports.filterIncompleteListItems = exports.filterCompletedListItems = void 0;
var _entities = require("@core/entities");
var mapToListDescription = function mapToListDescription(response) {
  var mappedResponse = response.data.map(function (list) {
    return {
      id: list.id,
      title: list.title,
      complete: list.complete
    };
  });
  return mappedResponse;
};
exports.mapToListDescription = mapToListDescription;
var filterCompletedListItems = function filterCompletedListItems(todoListItems) {
  var filteredList = todoListItems.filter(function (listItem) {
    if (listItem.complete === _entities.ListItemStatus.COMPLETED) {
      return listItem;
    }
  });
  return filteredList;
};
exports.filterCompletedListItems = filterCompletedListItems;
var filterIncompleteListItems = function filterIncompleteListItems(todoListItems) {
  var filteredList = todoListItems.filter(function (listItem) {
    if (listItem.complete === _entities.ListItemStatus.INCOMPLETE) {
      return listItem;
    }
  });
  return filteredList;
};
exports.filterIncompleteListItems = filterIncompleteListItems;