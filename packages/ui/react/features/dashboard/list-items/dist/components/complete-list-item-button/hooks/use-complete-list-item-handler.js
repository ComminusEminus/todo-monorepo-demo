"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCompleteListItemHandler = void 0;
var _entities = require("@core/entities");
var _contexts = require("@reactui/contexts");
var _useCompleteListItemUi = require("./use-complete-list-item-ui");
var useCompleteListItemHandler = function useCompleteListItemHandler() {
  var _useListItemContext = (0, _contexts.useListItemContext)(),
    dispatch = _useListItemContext.dispatch,
    state = _useListItemContext.state;
  var listItemData = state.listItemData;
  var _useCompleteListItemU = (0, _useCompleteListItemUi.useCompleteListItemUi)(),
    completeApiState = _useCompleteListItemU.completeApiState,
    updateTodoListItemCompleteStateApi = _useCompleteListItemU.updateTodoListItemCompleteStateApi;
  var completeHandler = function completeHandler() {
    if (!listItemData) {
      throw new Error('ListItemData not available in use completeTodoListItemUI');
    }
    if (listItemData.complete === _entities.CompleteState.INCOMPLETE) {
      updateTodoListItemCompleteStateApi(listItemData, _entities.CompleteState.COMPLETED);
    } else {
      updateTodoListItemCompleteStateApi(listItemData, _entities.CompleteState.INCOMPLETE);
    }
  };
  return {
    listItemData: listItemData,
    completeHandler: completeHandler,
    completeApiState: completeApiState
  };
};
exports.useCompleteListItemHandler = useCompleteListItemHandler;