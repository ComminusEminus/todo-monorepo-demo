"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = Button;
var _react = _interopRequireDefault(require("react"));
var _ButtonState = require("../state-wrapper/ButtonState");
var _Button = require("../style/Button.style");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Button(props) {
  return /*#__PURE__*/_react.default.createElement(_ButtonState.ButtonState, {
    mt: props.mt,
    mb: props.mb,
    ml: props.ml,
    mr: props.mr,
    borderRadius: props.borderRadius,
    elevation: props.elevation,
    buttonStateWidth: props.buttonStateWidth
  }, /*#__PURE__*/_react.default.createElement(_Button.ButtonStyle, {
    type: props.type,
    onClick: props.onClick,
    size: props.size,
    buttonStyle: props.buttonStyle,
    value: props.value
  }, props.text));
}