"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGetListUi = void 0;
var _react = require("react");
var _uiContext = require("../providers/ui-context");
var _http = require("@reactui/http");
var useGetListUi = function useGetListUi() {
  var _useGetTodoListById = (0, _http.useGetTodoListById)(),
    getTodoListApiHandler = _useGetTodoListById.getTodoListApiHandler,
    todoListApiState = _useGetTodoListById.todoListApiState;
  var returnValue = todoListApiState.returnValue;
  var list = returnValue.list,
    message = returnValue.message,
    error = returnValue.error;
  var _useUIContext = (0, _uiContext.useUIContext)(),
    uiState = _useUIContext.state;
  var selectedTodoListId = uiState.selectedTodoListId,
    updateTodoListItems = uiState.updateTodoListItems;
  (0, _react.useEffect)(function () {
    if (selectedTodoListId) {
      getTodoListApiHandler(selectedTodoListId);
    }
  }, [selectedTodoListId]);
  return {
    todoListApiState: todoListApiState
  };
};
exports.useGetListUi = useGetListUi;