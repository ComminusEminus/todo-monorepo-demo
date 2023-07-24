"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TodoListsContainer = void 0;
var _react = _interopRequireDefault(require("react"));
var _index = require("../hooks/index");
var _index2 = require("./index");
var _text = require("@design/text");
var _container = require("@design/container");
var _styledComponents = require("styled-components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var TodoListsContainer = function TodoListsContainer() {
  var _useGetAllTodoListsSt = (0, _index.useGetAllTodoListsState)(),
    todoLists = _useGetAllTodoListsSt.todoLists;
  var theme = (0, _styledComponents.useTheme)();
  var emptyRespose = 'You currently have nothing Todo!';
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !todoLists && /*#__PURE__*/_react["default"].createElement(_container.Container, {
    flexDirection: 'column',
    background: theme.colors.neutral.surface
  }, /*#__PURE__*/_react["default"].createElement(_text.Text, {
    text: emptyRespose,
    color: theme.colors.neutral.onBackground,
    fontSize: 'xs',
    fontFamily: 'Albert-Sans'
  })), todoLists && /*#__PURE__*/_react["default"].createElement(_container.Container, {
    flexDirection: 'column',
    background: theme.colors.neutral.surface
  }, /*#__PURE__*/_react["default"].createElement(_index2.MapTodoLists, {
    lists: todoLists
  })));
};
exports.TodoListsContainer = TodoListsContainer;