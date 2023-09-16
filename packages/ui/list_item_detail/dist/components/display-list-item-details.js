"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DisplayListItemDetails = void 0;
var _react = _interopRequireDefault(require("react"));
var _container = require("@design/container");
var _text = require("@design/text");
var _styledComponents = require("styled-components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var DisplayListItemDetails = function DisplayListItemDetails(_ref) {
  var displayItem = _ref.displayItem;
  var theme = (0, _styledComponents.useTheme)();
  console.log(displayItem);
  return /*#__PURE__*/_react["default"].createElement(_container.Container, {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    background: theme.colors.neutral.surface,
    height: '100%',
    width: '100%',
    elevation: 'sm',
    pr: '10px',
    pl: '10px',
    pt: '15px',
    pb: '15px'
  }, /*#__PURE__*/_react["default"].createElement(_text.Text, {
    text: displayItem.title,
    color: theme.colors.neutral.onSurface,
    fontSize: theme.space.md,
    fontFamily: 'Albert_Sans'
  }), /*#__PURE__*/_react["default"].createElement(_text.Text, {
    text: displayItem.description,
    color: theme.colors.neutral.onSurface,
    fontSize: theme.space.sm,
    fontFamily: 'Barlow'
  }), /*#__PURE__*/_react["default"].createElement(_text.Text, {
    text: displayItem.complete,
    color: theme.colors.neutral.onSurface,
    fontSize: theme.space.sm,
    fontFamily: 'Barlow'
  }));
};
exports.DisplayListItemDetails = DisplayListItemDetails;