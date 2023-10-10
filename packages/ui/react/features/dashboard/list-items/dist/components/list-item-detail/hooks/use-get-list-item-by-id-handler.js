"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGetListItemByIdHandler = void 0;
var _react = require("react");
var _http = require("@reactui/http");
var _contexts = require("@reactui/contexts");
var useGetListItemByIdHandler = function useGetListItemByIdHandler() {
  var _useUIContext = (0, _contexts.useUIContext)(),
    state = _useUIContext.state,
    dispatch = _useUIContext.dispatch;
  var selectedTodoListItemId = state.selectedTodoListItemId;
  var _useGetListItemById = (0, _http.useGetListItemById)(),
    getListItemByIdApiHandler = _useGetListItemById.getListItemByIdApiHandler,
    getListItemApiState = _useGetListItemById.getListItemApiState;
  (0, _react.useEffect)(function () {
    if (selectedTodoListItemId) {
      getListItemByIdApiHandler(selectedTodoListItemId);
    }
  }, [selectedTodoListItemId]);
  return {
    getListItemApiState: getListItemApiState
  };
};
exports.useGetListItemByIdHandler = useGetListItemByIdHandler;