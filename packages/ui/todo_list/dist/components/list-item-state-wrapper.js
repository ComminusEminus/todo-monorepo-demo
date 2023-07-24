"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TodoListItemState = void 0;
var _react = _interopRequireDefault(require("react"));
var _animationwrapper = require("@design/animationwrapper");
var _contexts = require("@ui/contexts");
var _text = require("@design/text");
var _styledComponents = require("styled-components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var TodoListItemState = function TodoListItemState(props) {
  var _useListItemContext = (0, _contexts.useListItemContext)(),
    visibilityState = _useListItemContext.visibilityState;
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, visibilityState && /*#__PURE__*/_react["default"].createElement(_animationwrapper.DeleteItemAnimationWrapper, {
    animateState: visibilityState
  }, props.children), !visibilityState && /*#__PURE__*/_react["default"].createElement(_text.Text, {
    text: '...Loading',
    color: theme.colors.neutral.onBackground,
    fontSize: 'xs',
    fontFamily: 'Albert-Sans'
  }));
};
exports.TodoListItemState = TodoListItemState;