"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = void 0;
var _react = _interopRequireDefault(require("react"));
var _Card = require("./Card.style");
var _container = require("@design/container");
var _text = require("@design/text");
var _styledComponents = require("styled-components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Card = props => {
  const theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_Card.CardStyle, {
    cardType: props.cardType,
    borderRadius: props.borderRadius,
    display: props.display
  }, props.headline && /*#__PURE__*/_react.default.createElement(_container.Container, {
    fontFamily: "'Albert Sans', sans-serif",
    flexGrow: 1,
    flexShrink: 2,
    justifyContent: "flex-start",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_text.Text, {
    text: props.headline,
    color: theme.colors.neutral.onBackground,
    fontSize: 'lg'
  })), props.subHeader && /*#__PURE__*/_react.default.createElement(_container.Container, {
    fontFamily: "'Barlow', sans-serif",
    flexGrow: 1,
    flexShrink: 2,
    justifyContent: "flex-start",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_text.Text, {
    text: props.subHeader,
    color: theme.colors.neutral.onBackground,
    fontSize: 'sm'
  })), props.content && /*#__PURE__*/_react.default.createElement(_container.Container, {
    fontFamily: "'Barlow', sans-serif",
    flexGrow: 4,
    flexShrink: 0,
    justifyContent: "flex-start",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_text.Text, {
    text: props.content,
    color: theme.colors.neutral.onBackground,
    fontSize: 'md'
  })), props.actionComponents && /*#__PURE__*/_react.default.createElement(_container.Container, {
    flexGrow: 1,
    flexShrink: 2,
    justifyContent: "flex-end",
    alignItems: "center"
  }, props.actionComponents));
};
exports.Card = Card;