"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TodoListItemContainer = void 0;
var _react = _interopRequireDefault(require("react"));
var _useGetTodolistById = require("../hooks/use-get-todolist-by-id");
var _container = require("@design/container");
var _text = require("@design/text");
var _styledComponents = require("styled-components");
var _mapTodoListItems = require("./map-todo-list-items");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var TodoListItemContainer = function TodoListItemContainer() {
  var _useGetTodoListById = (0, _useGetTodolistById.useGetTodoListById)(),
    todoList = _useGetTodoListById.todoList;
  var theme = (0, _styledComponents.useTheme)();
  var emptyRespose = 'No List Selected';
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !todoList && /*#__PURE__*/_react["default"].createElement(_container.Container, {
    flexDirection: 'column',
    background: theme.colors.neutral.surface
  }, /*#__PURE__*/_react["default"].createElement(_text.Text, {
    text: emptyRespose,
    color: theme.colors.neutral.onBackground,
    fontSize: 'xs',
    fontFamily: 'Albert-Sans'
  })), todoList && /*#__PURE__*/_react["default"].createElement(_container.Container, {
    flexDirection: 'column',
    background: theme.colors.neutral.surface
  }, /*#__PURE__*/_react["default"].createElement(_mapTodoListItems.MapTodoListItems, {
    list: todoList
  })));
};
exports.TodoListItemContainer = TodoListItemContainer;