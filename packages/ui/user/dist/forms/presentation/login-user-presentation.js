"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginUserPresentation = void 0;
var _react = _interopRequireDefault(require("react"));
var _useLoginUserFormHook2 = require("../form-hook/use-login-user-form-hook");
var _forms = require("@design/forms");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//add loading states from request state 

var LoginUserPresentation = function LoginUserPresentation() {
  var _useLoginUserFormHook = (0, _useLoginUserFormHook2.useLoginUserFormHook)(),
    onSubmit = _useLoginUserFormHook.onSubmit,
    register = _useLoginUserFormHook.register,
    requestState = _useLoginUserFormHook.requestState;
  return /*#__PURE__*/_react["default"].createElement(_forms.Form, {
    onSubmit: onSubmit,
    justifyButton: 'flex-end',
    alignButton: 'center'
  }, /*#__PURE__*/_react["default"].createElement(_forms.Fieldset, null, /*#__PURE__*/_react["default"].createElement(_forms.Input, {
    id: 'username-input',
    register: register,
    name: "userName",
    placeholder: "Enter Username"
  }), /*#__PURE__*/_react["default"].createElement(_forms.Input, {
    id: 'password-input',
    register: register,
    name: "password",
    placeholder: "Enter Password"
  })));
};
exports.LoginUserPresentation = LoginUserPresentation;