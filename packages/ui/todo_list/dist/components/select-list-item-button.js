"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectListItemButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _index = require("../hooks/index");
var _container = require("@design/container");
var _text = require("@design/text");
var _styledComponents = require("styled-components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var SelectListItemButton = function SelectListItemButton() {
  var _useSelectTodoListIte = (0, _index.useSelectTodoListItem)(),
    selectHandler = _useSelectTodoListIte.selectHandler,
    originalState = _useSelectTodoListIte.originalState;
  var theme = (0, _styledComponents.useTheme)();
  if (originalState) {
    return /*#__PURE__*/_react["default"].createElement(_container.Container, {
      onClick: selectHandler,
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
exports.SelectListItemButton = SelectListItemButton;