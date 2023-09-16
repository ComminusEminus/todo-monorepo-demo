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
var _text = require("@design/text");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var FormDisplayContainer = function FormDisplayContainer() {
  var _useFormDisplay = (0, _useFormDisplay2.useFormDisplay)(),
    formType = _useFormDisplay.formType;
  var theme = (0, _styledComponents.useTheme)();
  if (formType === _entities.FormType.NEW_TODOLIST_ITEM) {
    return /*#__PURE__*/_react["default"].createElement(_container.Container, {
      background: theme.colors.neutral.surface,
      height: '100%',
      width: '100%',
      elevation: 'md',
      pt: '10px',
      pb: '10px',
      pr: '10px',
      pl: '10px',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }, /*#__PURE__*/_react["default"].createElement(_text.Text, {
      text: 'Add New Todo List',
      color: 'theme.colors.neutral.onSurface',
      fontSize: theme.space.md,
      fontFamily: 'Albert_Sans'
    }), /*#__PURE__*/_react["default"].createElement(_todoList.AddNewTodoListItemFormPresentation, null));
  } else if (formType === _entities.FormType.NEW_TODOLIST) {
    return /*#__PURE__*/_react["default"].createElement(_container.Container, {
      background: theme.colors.neutral.surface,
      height: '100%',
      width: '100%',
      elevation: 'md',
      pt: '10px',
      pb: '10px',
      pr: '10px',
      pl: '10px',
      justifyContent: 'center',
      alignItems: 'center'
    }, /*#__PURE__*/_react["default"].createElement(_text.Text, {
      text: 'Add New List Item',
      color: 'theme.colors.neutral.onSurface',
      fontSize: theme.space.md,
      fontFamily: 'Albert_Sans'
    }), /*#__PURE__*/_react["default"].createElement(_todoLists.AddNewTodoListFormPresentation, null));
  } else {
    return /*#__PURE__*/_react["default"].createElement(_container.Container, {
      background: theme.colors.neutral.surface,
      height: '25%',
      width: '25%'
    });
  }
};
exports.FormDisplayContainer = FormDisplayContainer;