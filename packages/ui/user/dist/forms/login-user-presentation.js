"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginUserPresentation = void 0;
var _react = _interopRequireDefault(require("react"));
var _index = require("./index");
var _input = require("@design/input");
var _forms = require("@design/forms");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var LoginUserPresentation = function LoginUserPresentation() {
  var _useLoginUserForm = (0, _index.useLoginUserForm)(),
    onSubmit = _useLoginUserForm.onSubmit,
    register = _useLoginUserForm.register;
  return /*#__PURE__*/_react["default"].createElement(_forms.Form, {
    onSubmit: onSubmit
  }, /*#__PURE__*/_react["default"].createElement(_input.Input, {
    register: register,
    name: "userName",
    placeholder: "Enter Username"
  }), /*#__PURE__*/_react["default"].createElement(_input.Input, {
    register: register,
    name: "password",
    placeholder: "Enter Password"
  }));
};
exports.LoginUserPresentation = LoginUserPresentation;