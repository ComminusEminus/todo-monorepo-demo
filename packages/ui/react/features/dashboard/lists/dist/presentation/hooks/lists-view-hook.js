"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListsViewHook = void 0;
var _react = require("react");
var _contexts = require("@reactui/contexts");
var _http = require("@reactui/http");
var ListsViewHook = function ListsViewHook() {
  var _useGetAllTodoListsAp = (0, _http.useGetAllTodoListsApi)(),
    getAllTodoListsApiHandler = _useGetAllTodoListsAp.getAllTodoListsApiHandler,
    getAllTodoListsApiState = _useGetAllTodoListsAp.getAllTodoListsApiState;
  var returnValue = getAllTodoListsApiState.returnValue;
  var lists = returnValue.lists,
    message = returnValue.message;
  var _useAllListsContext = (0, _contexts.useAllListsContext)(),
    state = _useAllListsContext.state,
    dispatch = _useAllListsContext.dispatch;
  var update = state.update;
  (0, _react.useEffect)(function () {
    getAllTodoListsApiHandler();
  }, [update]);
  return {
    getAllTodoListsApiState: getAllTodoListsApiState
  };
};
exports.ListsViewHook = ListsViewHook;