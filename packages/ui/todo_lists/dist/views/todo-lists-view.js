"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TodoListsView = void 0;
var _react = _interopRequireDefault(require("react"));
var _index = require("../components/index");
var _container = require("@design/container");
var _styledComponents = require("styled-components");
var _useUpdateTodoListsImplementation = require("../hooks/implementation/use-update-todo-lists-implementation");
var _text = require("@design/text");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//add loading state

//storybook view is in todo-lists-container api mocking addons currently not updated for Webpack5
var TodoListsView = function TodoListsView() {
  var theme = (0, _styledComponents.useTheme)();
  var _useUpdateTodoListsIm = (0, _useUpdateTodoListsImplementation.useUpdateTodoListsImplementation)(),
    getAllTodoListsApiState = _useUpdateTodoListsIm.getAllTodoListsApiState;
  var allTodoLists = getAllTodoListsApiState.allTodoLists,
    loading = getAllTodoListsApiState.loading,
    errorMessage = getAllTodoListsApiState.errorMessage;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_container.Container, {
    background: theme.colors.neutral.background,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  }, /*#__PURE__*/_react["default"].createElement(_text.Text, {
    text: 'Todo Lists',
    color: 'theme.colors.neutral.onSurface',
    fontSize: theme.space.lg,
    fontFamily: 'Albert_Sans'
  }), /*#__PURE__*/_react["default"].createElement(_index.TodoListsContainer, {
    allTodoLists: allTodoLists,
    loading: loading,
    errorMessage: errorMessage
  })));
};
exports.TodoListsView = TodoListsView;