"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCompleteListItemUi = void 0;
var _react = require("react");
var _entities = require("@core/entities");
var _http = require("@reactui/http");
var _contexts = require("@reactui/contexts");
var useCompleteListItemUi = function useCompleteListItemUi() {
  var _useSelectedListConte = (0, _contexts.useSelectedListContext)(),
    dispatch = _useSelectedListConte.dispatch;
  var _useCompleteTodoListI = (0, _http.useCompleteTodoListItem)(),
    updateTodoListItemCompleteStateApi = _useCompleteTodoListI.updateTodoListItemCompleteStateApi,
    completeApiState = _useCompleteTodoListI.completeApiState,
    setReturnValue = _useCompleteTodoListI.setReturnValue;
  var loading = completeApiState.loading,
    returnValue = completeApiState.returnValue;
  var message = returnValue.message;
  (0, _react.useEffect)(function () {
    if (message === 'ok') {
      dispatch({
        type: _entities.SELECTED_LIST_ACTIONS.UPDATE_LIST,
        payload: null
      });
    }
  }, [message]);
  return {
    completeApiState: completeApiState,
    updateTodoListItemCompleteStateApi: updateTodoListItemCompleteStateApi
  };
};
exports.useCompleteListItemUi = useCompleteListItemUi;