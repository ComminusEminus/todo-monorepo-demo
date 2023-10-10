"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSelectListItemHandler = void 0;
var _entities = require("@core/entities");
var _contexts = require("@reactui/contexts");
var useSelectListItemHandler = function useSelectListItemHandler() {
  var _useListItemContext = (0, _contexts.useListItemContext)(),
    state = _useListItemContext.state;
  var listItemData = state.listItemData;
  var _useUIContext = (0, _contexts.useUIContext)(),
    listsState = _useUIContext.state,
    dispatch = _useUIContext.dispatch;
  var selectedTodoListItemId = listsState.selectedTodoListItemId;
  var selectListItemHandler = function selectListItemHandler() {
    if (!listItemData) {
      throw new Error("List item data is empty");
    }
    if (selectedTodoListItemId === listItemData._id) {
      return;
    }
    dispatch({
      type: _entities.UIACTIONS.SELECT_TODO_LIST_ITEM_BY_ID,
      payload: listItemData._id
    });
  };
  var resultValues = {
    listItemData: listItemData,
    selectedTodoListItemId: selectedTodoListItemId
  };
  return {
    selectListItemHandler: selectListItemHandler,
    resultValues: resultValues
  };
};
exports.useSelectListItemHandler = useSelectListItemHandler;