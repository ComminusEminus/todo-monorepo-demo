"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TodoListsBackground = void 0;
var _react = _interopRequireDefault(require("react"));
var _container = require("@design/container");
var _contexts = require("@ui/contexts");
var _text = require("@design/text");
var _styledComponents = require("styled-components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var TodoListsBackground = function TodoListsBackground(props) {
  var _useUIContext = (0, _contexts.useUIContext)(),
    dispatch = _useUIContext.dispatch,
    state = _useUIContext.state;
  var selectedTodoListId = state.selectedTodoListId;
  var _useListsContext = (0, _contexts.useListsContext)(),
    listsDispatch = _useListsContext.dispatch,
    listsState = _useListsContext.state;
  var listsData = listsState.listsData;
  var theme = (0, _styledComponents.useTheme)();
  if (!listsData) {
    return /*#__PURE__*/_react["default"].createElement(_container.Container, {
      flexDirection: 'column',
      background: theme.colors.neutral.surface,
      width: '100%',
      height: '100%'
    }, /*#__PURE__*/_react["default"].createElement(_text.Text, {
      text: "Loading Lists Data",
      color: theme.colors.neutral.onBackground,
      fontSize: 'xs',
      fontFamily: 'Albert_Sans'
    }));
  } else {
    return /*#__PURE__*/_react["default"].createElement(_container.Container, {
      background: selectedTodoListId === listsData._id ? theme.colors.neutral.surface : theme.colors.neutral.surfaceLow,
      width: '100%',
      height: 'fit-content',
      justifyContent: 'space-between',
      alignItems: 'center',
      pl: '10%'
    }, props.children);
  }
};
exports.TodoListsBackground = TodoListsBackground;