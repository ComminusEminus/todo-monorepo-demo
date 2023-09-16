"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCreateNewUserUI = void 0;
var _contexts = require("@ui/contexts");
var _react = require("react");
var _useCreateNewUserProfileApi = require("../api/use-create-new-user-profile-api");
var useCreateNewUserUI = function useCreateNewUserUI(_ref) {
  var pageDisplayHandler = _ref.pageDisplayHandler;
  var _useUIContext = (0, _contexts.useUIContext)(),
    dispatch = _useUIContext.dispatch,
    state = _useUIContext.state;
  var _useCreateNewUserProf = (0, _useCreateNewUserProfileApi.useCreateNewUserProfileApi)(),
    createNewUserApiHandler = _useCreateNewUserProf.createNewUserApiHandler,
    requestState = _useCreateNewUserProf.requestState;
  var loading = requestState.loading,
    error = requestState.error,
    returnValue = requestState.returnValue;
  var message = returnValue.message,
    err = returnValue.error;
  (0, _react.useEffect)(function () {
    if (message === 'ok') {
      pageDisplayHandler();
    }
  }, [returnValue]);
  return {
    requestState: requestState,
    createNewUserApiHandler: createNewUserApiHandler
  };
};
exports.useCreateNewUserUI = useCreateNewUserUI;