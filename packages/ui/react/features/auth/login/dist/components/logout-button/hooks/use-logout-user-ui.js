"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLogoutUserUi = void 0;
var _react = require("react");
var _entities = require("@core/entities");
var _contexts = require("@reactui/contexts");
var _http = require("@reactui/http");
var useLogoutUserUi = function useLogoutUserUi() {
  var _useUIContext = (0, _contexts.useUIContext)(),
    dispatch = _useUIContext.dispatch,
    state = _useUIContext.state;
  var _useLogoutUser = (0, _http.useLogoutUser)(),
    logoutApiHandler = _useLogoutUser.logoutApiHandler,
    requestState = _useLogoutUser.requestState;
  var loading = requestState.loading,
    returnValue = requestState.returnValue;
  var message = returnValue.message,
    err = returnValue.error;
  (0, _react.useEffect)(function () {
    if (message === 'ok') {
      localStorage.removeItem('loggedIn');
      dispatch({
        type: _entities.UIACTIONS.LOGGED_IN,
        payload: ''
      });
    }
  }, [message]);
  return {
    requestState: requestState,
    logoutApiHandler: logoutApiHandler
  };
};
exports.useLogoutUserUi = useLogoutUserUi;