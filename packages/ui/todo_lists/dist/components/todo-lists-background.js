"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TodoListsBackground = void 0;
var _react = _interopRequireDefault(require("react"));
var _container = require("@design/container");
var _contexts = require("@ui/contexts");
var _styledComponents = require("styled-components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var TodoListsBackground = function TodoListsBackground(props) {
  var _useListsContext = (0, _contexts.useListsContext)(),
    viewTodoList = _useListsContext.viewTodoList;
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react["default"].createElement(_container.Container, {
    background: viewTodoList === props.listId ? theme.colors.neutral.surface : theme.colors.neutral.surfaceLow
  }, props.children);
};
exports.TodoListsBackground = TodoListsBackground;