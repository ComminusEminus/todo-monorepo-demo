"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterList = void 0;
var _entities = require("@core/entities");
var _filterCompleteListItems = require("./filter-complete-list-items");
var _filterIncompleteListItems = require("./filter-incomplete-list-items");
var filterList = function filterList(_ref) {
  var filterListState = _ref.filterListState,
    setFilteredList = _ref.setFilteredList,
    selectedList = _ref.selectedList;
  if (filterListState === _entities.Filter.ALL_LIST_ITEMS) {
    //dispatch({ type: SELECTED_LIST_ACTIONS.UPDATE_FILTERED_LIST, payload: selectedList })
    setFilteredList(selectedList);
  } else if (filterListState === _entities.Filter.COMPLETE_LIST_ITEMS) {
    //dispatch({ type: SELECTED_LIST_ACTIONS.UPDATE_FILTERED_LIST, payload: filterCompleteListItems(selectedList) })
    setFilteredList(function () {
      return (0, _filterCompleteListItems.filterCompleteListItems)(selectedList);
    });
  } else if (filterListState === _entities.Filter.INCOMPLETE_LIST_ITEMS) {
    //dispatch({ type: SELECTED_LIST_ACTIONS.UPDATE_FILTERED_LIST, payload: filterIncompleteListItems(selectedList) })
    setFilteredList(function () {
      return (0, _filterIncompleteListItems.filterIncompleteListItems)(selectedList);
    });
  }
};
exports.filterList = filterList;