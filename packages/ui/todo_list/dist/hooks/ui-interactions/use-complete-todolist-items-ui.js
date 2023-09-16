"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCompleteTodoListItemUI = void 0;
var _entities = require("@core/entities");
var _contexts = require("@ui/contexts");
var _useCompleteTodolistItemsImplementation = require("../implementation/use-complete-todolist-items-implementation");
var useCompleteTodoListItemUI = function useCompleteTodoListItemUI() {
  var _useListItemContext = (0, _contexts.useListItemContext)(),
    dispatch = _useListItemContext.dispatch,
    state = _useListItemContext.state;
  var listItemData = state.listItemData;
  var _useCompleteTodoListI = (0, _useCompleteTodolistItemsImplementation.useCompleteTodoListItemsImplementation)(),
    completeApiState = _useCompleteTodoListI.completeApiState,
    updateTodoListItemCompleteStateApi = _useCompleteTodoListI.updateTodoListItemCompleteStateApi;
  var completeHandler = function completeHandler() {
    //dispatch({ type: LIST_ITEM_ACTIONS.UPDATE_COMPLETE_STATE, payload: null })
    var newCompleteState;
    if (!listItemData) {
      throw new Error('ListItemData not available in use completeTodoListItemUI');
    }
    if (listItemData.complete === _entities.CompleteState.INCOMPLETE) {
      newCompleteState = _entities.CompleteState.COMPLETED;
    } else {
      newCompleteState = _entities.CompleteState.INCOMPLETE;
    }
    updateTodoListItemCompleteStateApi(listItemData, newCompleteState);
  };
  return {
    listItemData: listItemData,
    completeHandler: completeHandler,
    completeApiState: completeApiState
  };
};
exports.useCompleteTodoListItemUI = useCompleteTodoListItemUI;