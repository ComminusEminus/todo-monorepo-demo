"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDeleteListItemUi = void 0;
var _react = require("react");
var _entities = require("@core/entities");
var _http = require("@reactui/http");
var _contexts = require("@reactui/contexts");
var useDeleteListItemUi = function useDeleteListItemUi() {
  var _useSelectedListConte = (0, _contexts.useSelectedListContext)(),
    dispatch = _useSelectedListConte.dispatch;
  var _useDeleteTodoListIte = (0, _http.useDeleteTodoListItem)(),
    deleteListItemApiHandler = _useDeleteTodoListIte.deleteListItemApiHandler,
    deleteApiState = _useDeleteTodoListIte.deleteApiState;
  var returnValue = deleteApiState.returnValue;
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
    deleteApiState: deleteApiState,
    deleteListItemApiHandler: deleteListItemApiHandler
  };
};
exports.useDeleteListItemUi = useDeleteListItemUi;