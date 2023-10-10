"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginUserFormPresentation = void 0;
var _react = _interopRequireDefault(require("react"));
var _common = require("@reactui/common");
var _useLoginUserFormHook2 = require("../hooks/use-login-user-form-hook");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var LoginUserFormPresentation = function LoginUserFormPresentation() {
  var _useLoginUserFormHook = (0, _useLoginUserFormHook2.useLoginUserFormHook)(),
    onSubmit = _useLoginUserFormHook.onSubmit,
    register = _useLoginUserFormHook.register,
    requestState = _useLoginUserFormHook.requestState;
  return /*#__PURE__*/_react["default"].createElement(_common.Form, {
    onSubmit: onSubmit,
    justifyButton: 'flex-end',
    alignButton: 'center'
  }, /*#__PURE__*/_react["default"].createElement(_common.Fieldset, null, /*#__PURE__*/_react["default"].createElement(_common.Input, {
    id: 'username-input',
    register: register,
    name: "userName",
    placeholder: "Enter Username"
  }), /*#__PURE__*/_react["default"].createElement(_common.Input, {
    id: 'password-input',
    register: register,
    name: "password",
    placeholder: "Enter Password"
  })));
};
exports.LoginUserFormPresentation = LoginUserFormPresentation;