"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddNewTodoListForm = void 0;
var _index = require("./index");
var _forms = require("@design/forms");
var _input = require("@design/input");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var AddNewTodoListForm = function AddNewTodoListForm() {
  var _useAddNewTodoListFor = (0, _index.useAddNewTodoListForm)(),
    onSubmit = _useAddNewTodoListFor.onSubmit,
    register = _useAddNewTodoListFor.register,
    handleSubmit = _useAddNewTodoListFor.handleSubmit;
  return /*#__PURE__*/_react["default"].createElement(_forms.Form, {
    handleSubmit: handleSubmit,
    onSubmit: onSubmit
  }, /*#__PURE__*/_react["default"].createElement(_input.Input, {
    register: register,
    name: 'Title',
    placeholder: "Enter Title"
  }));
};
exports.AddNewTodoListForm = AddNewTodoListForm;