"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLoginUserUI = void 0;
var _react = require("react");
var _useLoginUserApi2 = require("../api/use-login-user-api");
var _entities = require("@core/entities");
var _contexts = require("@ui/contexts");
var useLoginUserUI = function useLoginUserUI() {
  var _useUIContext = (0, _contexts.useUIContext)(),
    dispatch = _useUIContext.dispatch,
    state = _useUIContext.state;
  var _useLoginUserApi = (0, _useLoginUserApi2.useLoginUserApi)(),
    loginApiHandler = _useLoginUserApi.loginApiHandler,
    requestState = _useLoginUserApi.requestState;
  var returnValue = requestState.returnValue,
    error = requestState.error;
  var message = returnValue.message,
    err = returnValue.error;
  (0, _react.useEffect)(function () {
    if (message === 'ok') {
      console.log('loginUserUI message ok executed');
      dispatch({
        type: _entities.UIACTIONS.LOGGED_IN,
        payload: ''
      });
      localStorage.setItem('loggedIn', 'TRUE');
    }
  }, [returnValue]);
  return {
    loginApiHandler: loginApiHandler,
    requestState: requestState
  };
};
exports.useLoginUserUI = useLoginUserUI;