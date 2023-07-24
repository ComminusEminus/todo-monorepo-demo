"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormDisplayContainer = void 0;
var _react = _interopRequireDefault(require("react"));
var _container = require("@design/container");
var _useFormDisplay2 = require("../hooks/use-form-display");
var _entities = require("@core/entities");
var _todoList = require("@ui/todo-list");
var _todoLists = require("@ui/todo-lists");
var _styledComponents = require("styled-components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var FormDisplayContainer = function FormDisplayContainer() {
  var _useFormDisplay = (0, _useFormDisplay2.useFormDisplay)(),
    formsState = _useFormDisplay.formsState;
  var theme = (0, _styledComponents.useTheme)();
  if (formsState === _entities.FormType.NEW_TODOLIST) {
    return /*#__PURE__*/_react["default"].createElement(_container.Container, {
      background: theme.colors.neutral.surface,
      height: '25%',
      width: '25%',
      elevation: 'sm'
    }, /*#__PURE__*/_react["default"].createElement(_todoList.AddNewTodoListItemForm, null));
  } else if (formsState === _entities.FormType.NEW_TODOLIST_ITEM) {
    return /*#__PURE__*/_react["default"].createElement(_container.Container, {
      background: theme.colors.neutral.surface,
      height: '25%',
      width: '25%',
      elevation: 'sm'
    }, /*#__PURE__*/_react["default"].createElement(_todoLists.AddNewTodoListForm, null));
  } else {
    return /*#__PURE__*/_react["default"].createElement(_container.Container, {
      background: theme.colors.neutral.surface,
      height: '25%',
      width: '25%',
      elevation: 'sm'
    });
  }
};
exports.FormDisplayContainer = FormDisplayContainer;