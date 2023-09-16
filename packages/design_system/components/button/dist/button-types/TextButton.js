"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _ButtonState = require("../state-wrapper/ButtonState");
var _TextButton = require("../style/TextButton.style");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const TextButton = props => {
  return /*#__PURE__*/_react.default.createElement(_ButtonState.ButtonState, {
    mt: props.mt,
    mb: props.mb,
    ml: props.ml,
    mr: props.mr,
    borderRadius: props.borderRadius,
    elevation: props.elevation,
    buttonStateWidth: props.buttonStateWidth
  }, /*#__PURE__*/_react.default.createElement(_TextButton.TextButtonStyle, {
    type: props.type,
    onClick: props.onClick,
    size: props.size,
    buttonStyle: props.buttonStyle,
    value: props.value,
    color: props.color
  }, props.text));
};
exports.TextButton = TextButton;