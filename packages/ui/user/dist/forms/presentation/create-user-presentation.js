"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUserPresentation = void 0;
var _react = _interopRequireDefault(require("react"));
var _useCreateNewUserFormHook = require("../form-hook/use-create-new-user-form-hook");
var _forms = require("@design/forms");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//add errors and loading state

var CreateUserPresentation = function CreateUserPresentation(_ref) {
  var pageDisplayHandler = _ref.pageDisplayHandler;
  var _useCreateNewUserForm = (0, _useCreateNewUserFormHook.useCreateNewUserFormHook)({
      pageDisplayHandler: pageDisplayHandler
    }),
    onSubmit = _useCreateNewUserForm.onSubmit,
    register = _useCreateNewUserForm.register,
    errors = _useCreateNewUserForm.errors,
    requestState = _useCreateNewUserForm.requestState;
  var loading = requestState.loading,
    error = requestState.error,
    returnValue = requestState.returnValue;
  return /*#__PURE__*/_react["default"].createElement(_forms.Form, {
    onSubmit: onSubmit,
    justifyButton: 'flex-end',
    alignButton: 'center'
  }, /*#__PURE__*/_react["default"].createElement(_forms.Fieldset, null, /*#__PURE__*/_react["default"].createElement(_forms.Input, {
    id: 'firstName-input',
    register: register,
    name: "firstName",
    placeholder: "Enter First Name"
  }), /*#__PURE__*/_react["default"].createElement(_forms.Input, {
    id: 'lastName-input',
    register: register,
    name: "lastName",
    placeholder: "Enter Last Name"
  }), /*#__PURE__*/_react["default"].createElement(_forms.Input, {
    id: 'userName-input',
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
exports.CreateUserPresentation = CreateUserPresentation;