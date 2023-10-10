"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDeleteListItemHandler = void 0;
var _contexts = require("@reactui/contexts");
var _useDeleteListItemUi2 = require("./use-delete-list-item-ui");
var useDeleteListItemHandler = function useDeleteListItemHandler() {
  var _useListItemContext = (0, _contexts.useListItemContext)(),
    dispatch = _useListItemContext.dispatch,
    state = _useListItemContext.state;
  var listItemData = state.listItemData;
  var _useUIContext = (0, _contexts.useUIContext)(),
    uiState = _useUIContext.state,
    uiDispatch = _useUIContext.dispatch;
  var selectedTodoListId = uiState.selectedTodoListId;
  var _useDeleteListItemUi = (0, _useDeleteListItemUi2.useDeleteListItemUi)(),
    deleteApiState = _useDeleteListItemUi.deleteApiState,
    deleteListItemApiHandler = _useDeleteListItemUi.deleteListItemApiHandler;
  var deleteListItemHandler = function deleteListItemHandler() {
    if (!listItemData || !selectedTodoListId) {
      return;
    }
    deleteListItemApiHandler(listItemData._id, selectedTodoListId);
  };
  return {
    state: state,
    deleteListItemHandler: deleteListItemHandler,
    deleteApiState: deleteApiState
  };
};
exports.useDeleteListItemHandler = useDeleteListItemHandler;