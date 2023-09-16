"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TodoListItemBackground = void 0;
var _react = _interopRequireDefault(require("react"));
var _container = require("@design/container");
var _contexts = require("@ui/contexts");
var _styledComponents = require("styled-components");
var _text = require("@design/text");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var TodoListItemBackground = function TodoListItemBackground(props) {
  var theme = (0, _styledComponents.useTheme)();
  var _useListItemContext = (0, _contexts.useListItemContext)(),
    state = _useListItemContext.state;
  var listItemData = state.listItemData;
  var _useUIContext = (0, _contexts.useUIContext)(),
    uiState = _useUIContext.state;
  var selectedTodoListItemId = uiState.selectedTodoListItemId;
  if (listItemData) {
    return /*#__PURE__*/_react["default"].createElement(_container.Container, {
      background: selectedTodoListItemId === listItemData._id ? theme.colors.neutral.surface : theme.colors.neutral.surfaceLow,
      width: '100%',
      height: 'fit-content',
      justifyContent: 'space-between',
      alignItems: 'center',
      pl: '10%'
    }, props.children);
  } else {
    return /*#__PURE__*/_react["default"].createElement(_container.Container, {
      flexDirection: 'column',
      background: theme.colors.neutral.surface,
      width: '100%',
      height: 'fit-content',
      justifyContent: 'flex-start',
      alignItems: 'center',
      pl: '10%'
    }, /*#__PURE__*/_react["default"].createElement(_text.Text, {
      text: "Loading Lists Data",
      color: theme.colors.neutral.onBackground,
      fontSize: 'xs',
      fontFamily: 'Albert_Sans'
    }));
  }
};
exports.TodoListItemBackground = TodoListItemBackground;