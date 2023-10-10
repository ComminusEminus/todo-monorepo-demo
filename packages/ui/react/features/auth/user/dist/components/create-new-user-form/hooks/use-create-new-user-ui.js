"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCreateNewUserUI = void 0;
var _react = require("react");
var _http = require("@reactui/http");
var _contexts = require("@reactui/contexts");
var useCreateNewUserUI = function useCreateNewUserUI() {
  var _useLoginContext = (0, _contexts.useLoginContext)(),
    pageSwitchHandler = _useLoginContext.pageSwitchHandler;
  var _useCreateNewUserProf = (0, _http.useCreateNewUserProfileApi)(),
    createNewUserApiHandler = _useCreateNewUserProf.createNewUserApiHandler,
    requestState = _useCreateNewUserProf.requestState;
  var loading = requestState.loading,
    returnValue = requestState.returnValue;
  var message = returnValue.message,
    err = returnValue.error;
  (0, _react.useEffect)(function () {
    if (message === 'ok') {
      pageSwitchHandler();
    }
  }, [returnValue]);
  return {
    requestState: requestState,
    createNewUserApiHandler: createNewUserApiHandler
  };
};
exports.useCreateNewUserUI = useCreateNewUserUI;