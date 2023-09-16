"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddNewTodoListItemFormPresentation = void 0;
var _react = _interopRequireDefault(require("react"));
var _useAddnewTodoListItemFormHook = require("../form-hooks/use-addnew-todo-list-item-form-hook");
var _forms = require("@design/forms");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var AddNewTodoListItemFormPresentation = function AddNewTodoListItemFormPresentation() {
  var _useAddNewTodoListIte = (0, _useAddnewTodoListItemFormHook.useAddNewTodoListItemFormHook)(),
    onSubmit = _useAddNewTodoListIte.onSubmit,
    register = _useAddNewTodoListIte.register,
    handleSubmit = _useAddNewTodoListIte.handleSubmit,
    errors = _useAddNewTodoListIte.errors,
    addNewTodoListApiState = _useAddNewTodoListIte.addNewTodoListApiState;
  return /*#__PURE__*/_react["default"].createElement(_forms.Form, {
    onSubmit: onSubmit,
    justifyButton: 'flex-end',
    alignButton: 'center'
  }, /*#__PURE__*/_react["default"].createElement(_forms.Fieldset, null, /*#__PURE__*/_react["default"].createElement(_forms.Input, {
    id: 'add-new-list-item-title',
    register: register,
    name: 'title',
    placeholder: "Enter Title"
  }), /*#__PURE__*/_react["default"].createElement(_forms.Input, {
    id: 'add-new-list-item-description',
    register: register,
    name: 'description',
    placeholder: "Enter Description"
  })));
};
exports.AddNewTodoListItemFormPresentation = AddNewTodoListItemFormPresentation;