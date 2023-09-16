"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLogoutUserUpdateObserver = void 0;
var _contexts = require("@ui/contexts");
var _entities = require("@core/entities");
var _react = require("react");
var _useLogoutUser2 = require("../api/use-logout-user");
var useLogoutUserUpdateObserver = function useLogoutUserUpdateObserver() {
  var _useUIContext = (0, _contexts.useUIContext)(),
    dispatch = _useUIContext.dispatch,
    state = _useUIContext.state;
  var _useLogoutUser = (0, _useLogoutUser2.useLogoutUser)(),
    logoutApiHandler = _useLogoutUser.logoutApiHandler,
    requestState = _useLogoutUser.requestState;
  var loading = requestState.loading,
    error = requestState.error,
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
  }, [returnValue]);
  return {
    requestState: requestState,
    logoutApiHandler: logoutApiHandler
  };
};
exports.useLogoutUserUpdateObserver = useLogoutUserUpdateObserver;