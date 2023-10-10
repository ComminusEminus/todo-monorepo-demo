"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddNewTodoListItemFormPresentation = void 0;
var _react = _interopRequireDefault(require("react"));
var _common = require("@reactui/common");
var _useAddnewTodoListItemFormHandler = require("../hooks/use-addnew-todo-list-item-form-handler");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var AddNewTodoListItemFormPresentation = function AddNewTodoListItemFormPresentation() {
  var _useAddNewTodoListIte = (0, _useAddnewTodoListItemFormHandler.useAddNewTodoListItemFormHandler)(),
    onSubmit = _useAddNewTodoListIte.onSubmit,
    register = _useAddNewTodoListIte.register,
    handleSubmit = _useAddNewTodoListIte.handleSubmit,
    errors = _useAddNewTodoListIte.errors,
    addNewTodoListApiState = _useAddNewTodoListIte.addNewTodoListApiState;
  return /*#__PURE__*/_react["default"].createElement(_common.Form, {
    onSubmit: onSubmit,
    justifyButton: 'flex-end',
    alignButton: 'center'
  }, /*#__PURE__*/_react["default"].createElement(_common.Fieldset, null, /*#__PURE__*/_react["default"].createElement(_common.Input, {
    id: 'add-new-list-item-title',
    register: register,
    name: 'title',
    placeholder: "Enter Title"
  }), /*#__PURE__*/_react["default"].createElement(_common.Input, {
    id: 'add-new-list-item-description',
    register: register,
    name: 'description',
    placeholder: "Enter Description"
  })));
};
exports.AddNewTodoListItemFormPresentation = AddNewTodoListItemFormPresentation;