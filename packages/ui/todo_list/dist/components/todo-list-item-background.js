"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TodoListItemBackground = void 0;
var _react = _interopRequireDefault(require("react"));
var _container = require("@design/container");
var _contexts = require("@ui/contexts");
var _styledComponents = require("styled-components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var TodoListItemBackground = function TodoListItemBackground(props) {
  var theme = (0, _styledComponents.useTheme)();
  var _useListItemContext = (0, _contexts.useListItemContext)(),
    viewTodoListItem = _useListItemContext.viewTodoListItem,
    originalState = _useListItemContext.originalState;
  if (originalState) {
    return /*#__PURE__*/_react["default"].createElement(_container.Container, {
      background: viewTodoListItem === originalState.id ? theme.colors.neutral.surface : theme.colors.neutral.surfaceLow
    }, props.children);
  } else {
    return /*#__PURE__*/_react["default"].createElement("p", null, "Loading");
  }
};
exports.TodoListItemBackground = TodoListItemBackground;