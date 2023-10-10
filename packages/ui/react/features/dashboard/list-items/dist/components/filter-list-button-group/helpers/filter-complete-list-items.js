"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterCompleteListItems = void 0;
var _entities = require("@core/entities");
var filterCompleteListItems = function filterCompleteListItems(todoListItems) {
  var filteredList = todoListItems.filter(function (listItem) {
    if (listItem.complete === _entities.CompleteState.COMPLETED) {
      return listItem;
    }
  });
  return filteredList;
};
exports.filterCompleteListItems = filterCompleteListItems;