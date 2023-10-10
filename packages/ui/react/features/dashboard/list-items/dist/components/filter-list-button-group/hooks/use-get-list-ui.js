"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGetListUi = void 0;
var _react = require("react");
var _entities = require("@core/entities");
var _contexts = require("@reactui/contexts");
var _useGetListHandler2 = require("./use-get-list-handler");
var useGetListUi = function useGetListUi() {
  var _useUIContext = (0, _contexts.useUIContext)(),
    uiState = _useUIContext.state;
  var selectedTodoListId = uiState.selectedTodoListId,
    updateTodoListItems = uiState.updateTodoListItems;
  var _useSelectedListConte = (0, _contexts.useSelectedListContext)(),
    state = _useSelectedListConte.state,
    dispatch = _useSelectedListConte.dispatch;
  var selectedList = state.selectedList;
  var _useGetListHandler = (0, _useGetListHandler2.useGetListHandler)({
      selectedTodoListId: selectedTodoListId
    }),
    todoListApiState = _useGetListHandler.todoListApiState;
  var returnValue = todoListApiState.returnValue;
  var list = returnValue.list,
    message = returnValue.message,
    error = returnValue.error;
  (0, _react.useEffect)(function () {
    if (message === 'ok') {
      dispatch({
        type: _entities.SELECTED_LIST_ACTIONS.UPDATE_SELECTED_LIST,
        payload: list
      });
    }
  }, [message]);
  return {
    selectedList: selectedList,
    dispatch: dispatch
  };
};
exports.useGetListUi = useGetListUi;