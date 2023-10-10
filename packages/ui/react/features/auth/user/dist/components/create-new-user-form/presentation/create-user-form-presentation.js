"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUserFormPresentation = void 0;
var _react = _interopRequireDefault(require("react"));
var _common = require("@reactui/common");
var _useCreateNewUserFormHook = require("../hooks/use-create-new-user-form-hook");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var CreateUserFormPresentation = function CreateUserFormPresentation() {
  var _useCreateNewUserForm = (0, _useCreateNewUserFormHook.useCreateNewUserFormHook)(),
    onSubmit = _useCreateNewUserForm.onSubmit,
    register = _useCreateNewUserForm.register,
    errors = _useCreateNewUserForm.errors,
    requestState = _useCreateNewUserForm.requestState;
  var loading = requestState.loading,
    returnValue = requestState.returnValue;
  return /*#__PURE__*/_react["default"].createElement(_common.Form, {
    onSubmit: onSubmit,
    justifyButton: 'flex-end',
    alignButton: 'center'
  }, /*#__PURE__*/_react["default"].createElement(_common.Fieldset, null, /*#__PURE__*/_react["default"].createElement(_common.Input, {
    id: 'firstName-input',
    register: register,
    name: "firstName",
    placeholder: "Enter First Name"
  }), /*#__PURE__*/_react["default"].createElement(_common.Input, {
    id: 'lastName-input',
    register: register,
    name: "lastName",
    placeholder: "Enter Last Name"
  }), /*#__PURE__*/_react["default"].createElement(_common.Input, {
    id: 'userName-input',
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
exports.CreateUserFormPresentation = CreateUserFormPresentation;