"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddNewTodoListItemForm = void 0;
var _react = _interopRequireDefault(require("react"));
var _useAddnewTodoListItemForm = require("./use-addnew-todo-list-item-form");
var _input = require("@design/input");
var _forms = require("@design/forms");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var AddNewTodoListItemForm = function AddNewTodoListItemForm() {
  var _useAddNewTodoListIte = (0, _useAddnewTodoListItemForm.useAddNewTodoListItemForm)(),
    onSubmit = _useAddNewTodoListIte.onSubmit,
    register = _useAddNewTodoListIte.register,
    handleSubmit = _useAddNewTodoListIte.handleSubmit;
  return /*#__PURE__*/_react["default"].createElement(_forms.Form, {
    handleSubmit: handleSubmit,
    onSubmit: onSubmit
  }, /*#__PURE__*/_react["default"].createElement(_input.Input, {
    register: register,
    name: 'title',
    placeholder: "Enter Title"
  }), /*#__PURE__*/_react["default"].createElement(_input.Input, {
    register: register,
    name: 'description',
    placeholder: "Enter Description"
  }));
};
exports.AddNewTodoListItemForm = AddNewTodoListItemForm;