"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterIncompleteListItems = void 0;
var _entities = require("@core/entities");
var filterIncompleteListItems = function filterIncompleteListItems(todoListItems) {
  var filteredList = todoListItems.filter(function (listItem) {
    if (listItem.complete === _entities.CompleteState.INCOMPLETE) {
      return listItem;
    }
  });
  return filteredList;
};
exports.filterIncompleteListItems = filterIncompleteListItems;