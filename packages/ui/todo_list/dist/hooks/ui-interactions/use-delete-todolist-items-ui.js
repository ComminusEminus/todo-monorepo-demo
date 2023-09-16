"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDeleteTodoListItemUI = void 0;
var _contexts = require("@ui/contexts");
var _entities = require("@core/entities");
var _useDeleteTodolistItemsImplementation = require("../implementation/use-delete-todolist-items-implementation");
var useDeleteTodoListItemUI = function useDeleteTodoListItemUI() {
  var _useListItemContext = (0, _contexts.useListItemContext)(),
    dispatch = _useListItemContext.dispatch,
    state = _useListItemContext.state;
  var listItemData = state.listItemData,
    visibilityState = state.visibilityState;
  var _useUIContext = (0, _contexts.useUIContext)(),
    uiState = _useUIContext.state,
    uiDispatch = _useUIContext.dispatch;
  var selectedTodoListId = uiState.selectedTodoListId;
  var _useDeleteTodoListIte = (0, _useDeleteTodolistItemsImplementation.useDeleteTodoListItemsImplementation)({
      listItemData: listItemData,
      selectedTodoListId: selectedTodoListId,
      visibilityState: visibilityState
    }),
    deleteApiState = _useDeleteTodoListIte.deleteApiState;
  var visibilityHandler = function visibilityHandler() {
    dispatch({
      type: _entities.LIST_ITEM_ACTIONS.UPDATE_VISIBILITY_STATE,
      payload: null
    });
    uiDispatch({
      type: _entities.UIACTIONS.UPDATE_TODO_LIST_ITEMS,
      payload: null
    });
  };
  return {
    state: state,
    visibilityHandler: visibilityHandler,
    deleteApiState: deleteApiState
  };
};
exports.useDeleteTodoListItemUI = useDeleteTodoListItemUI;