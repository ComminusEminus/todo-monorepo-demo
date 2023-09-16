"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useUpdateTodoListsImplementation = void 0;
var _contexts = require("@ui/contexts");
var _react = require("react");
var _useGetallTodolistsState = require("../api/use-getall-todolists-state");
var useUpdateTodoListsImplementation = function useUpdateTodoListsImplementation() {
  var _useUIContext = (0, _contexts.useUIContext)(),
    dispatch = _useUIContext.dispatch,
    state = _useUIContext.state;
  var updateTodoList = state.updateTodoList;
  var _useGetAllTodoListsAp = (0, _useGetallTodolistsState.useGetAllTodoListsApi)(),
    getAllTodoListsApiHandler = _useGetAllTodoListsAp.getAllTodoListsApiHandler,
    getAllTodoListsApiState = _useGetAllTodoListsAp.getAllTodoListsApiState;
  (0, _react.useEffect)(function () {
    getAllTodoListsApiHandler();
  }, [updateTodoList]);
  return {
    getAllTodoListsApiState: getAllTodoListsApiState
  };
};
exports.useUpdateTodoListsImplementation = useUpdateTodoListsImplementation;