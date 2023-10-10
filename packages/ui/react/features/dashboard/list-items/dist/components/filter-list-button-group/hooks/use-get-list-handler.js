"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGetListHandler = void 0;
var _react = require("react");
var _http = require("@reactui/http");
var useGetListHandler = function useGetListHandler(_ref) {
  var selectedTodoListId = _ref.selectedTodoListId;
  var _useGetTodoListById = (0, _http.useGetTodoListById)(),
    getTodoListApiHandler = _useGetTodoListById.getTodoListApiHandler,
    todoListApiState = _useGetTodoListById.todoListApiState;
  (0, _react.useEffect)(function () {
    if (selectedTodoListId) {
      getTodoListApiHandler(selectedTodoListId);
    }
  }, [selectedTodoListId]);
  return {
    todoListApiState: todoListApiState
  };
};
exports.useGetListHandler = useGetListHandler;