"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectListButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _index = require("../hooks/index");
var _styledComponents = require("styled-components");
var _text = require("@design/text");
var _container = require("@design/container");
var _contexts = require("@ui/contexts");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var SelectListButton = function SelectListButton() {
  var _useSelectTodoList = (0, _index.useSelectTodoList)(),
    selectTodoListHandler = _useSelectTodoList.selectTodoListHandler;
  var _useListsContext = (0, _contexts.useListsContext)(),
    originalState = _useListsContext.originalState;
  var theme = (0, _styledComponents.useTheme)();
  if (originalState) {
    return /*#__PURE__*/_react["default"].createElement(_container.Container, {
      onClick: selectTodoListHandler,
      flexDirection: 'column'
    }, /*#__PURE__*/_react["default"].createElement(_text.Text, {
      text: originalState.title,
      color: theme.colors.neutral.onBackground,
      fontSize: 'xs',
      fontFamily: 'Barlow'
    }));
  } else {
    return /*#__PURE__*/_react["default"].createElement(_text.Text, {
      text: '...Loading',
      color: theme.colors.neutral.onBackground,
      fontSize: 'xs',
      fontFamily: 'Barlow'
    });
  }
};
exports.SelectListButton = SelectListButton;