"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDeleteListUi = void 0;
var _react = require("react");
var _entities = require("@core/entities");
var _http = require("@reactui/http");
var useDeleteListUi = function useDeleteListUi(_ref) {
  var dispatch = _ref.dispatch;
  var _useDeleteTodoListApi = (0, _http.useDeleteTodoListApi)(),
    deleteListApiHandler = _useDeleteTodoListApi.deleteListApiHandler,
    deleteListApiState = _useDeleteTodoListApi.deleteListApiState;
  var returnValue = deleteListApiState.returnValue;
  var message = returnValue.message;
  (0, _react.useEffect)(function () {
    if (message === 'ok') {
      dispatch({
        type: _entities.ALL_LISTS_ACTIONS.UPDATE_ALL_LISTS,
        payload: undefined
      });
    }
  }, [message]);
  return {
    deleteListApiState: deleteListApiState,
    deleteListApiHandler: deleteListApiHandler
  };
};
exports.useDeleteListUi = useDeleteListUi;