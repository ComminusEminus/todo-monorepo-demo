"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUserPresentation = void 0;
var _react = _interopRequireDefault(require("react"));
var _index = require("./index");
var _input = require("@design/input");
var _forms = require("@design/forms");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var CreateUserPresentation = function CreateUserPresentation() {
  var _useCreateNewUserForm = (0, _index.useCreateNewUserForm)(),
    onSubmit = _useCreateNewUserForm.onSubmit,
    register = _useCreateNewUserForm.register;
  return /*#__PURE__*/_react["default"].createElement(_forms.Form, {
    onSubmit: onSubmit
  }, /*#__PURE__*/_react["default"].createElement(_input.Input, {
    register: register,
    name: "firstName",
    placeholder: "Enter First Name"
  }), /*#__PURE__*/_react["default"].createElement(_input.Input, {
    register: register,
    name: "lastName",
    placeholder: "Enter Last Name"
  }), /*#__PURE__*/_react["default"].createElement(_input.Input, {
    register: register,
    name: "userName",
    placeholder: "Enter Username"
  }), /*#__PURE__*/_react["default"].createElement(_input.Input, {
    register: register,
    name: "password",
    placeholder: "Enter Password"
  }));
};
exports.CreateUserPresentation = CreateUserPresentation;