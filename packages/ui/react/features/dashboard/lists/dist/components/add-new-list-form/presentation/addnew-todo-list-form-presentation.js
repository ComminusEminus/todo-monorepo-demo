"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddNewTodoListFormPresentation = void 0;
var _react = _interopRequireDefault(require("react"));
var _common = require("@reactui/common");
var _useAddnewTodoListFormHook = require("../hooks/use-addnew-todo-list-form-hook");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var AddNewTodoListFormPresentation = function AddNewTodoListFormPresentation() {
  var _useAddNewTodoListFor = (0, _useAddnewTodoListFormHook.useAddNewTodoListFormHook)(),
    onSubmit = _useAddNewTodoListFor.onSubmit,
    register = _useAddNewTodoListFor.register,
    errors = _useAddNewTodoListFor.errors,
    addNewListApiState = _useAddNewTodoListFor.addNewListApiState;
  return /*#__PURE__*/_react["default"].createElement(_common.Form, {
    onSubmit: onSubmit,
    justifyButton: 'flex-end',
    alignButton: 'center'
  }, /*#__PURE__*/_react["default"].createElement(_common.Fieldset, null, /*#__PURE__*/_react["default"].createElement(_common.Input, {
    id: 'new-list-title',
    register: register,
    name: 'title',
    placeholder: "Enter Title"
  })));
};
exports.AddNewTodoListFormPresentation = AddNewTodoListFormPresentation;