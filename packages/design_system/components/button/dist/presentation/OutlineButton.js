"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OutlineButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _ButtonState = require("../state-wrapper/ButtonState");
var _OutlineButton = require("../style/OutlineButton.style");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const OutlineButton = props => {
  return /*#__PURE__*/_react.default.createElement(_ButtonState.ButtonState, {
    mt: props.mt,
    mb: props.mb,
    ml: props.ml,
    mr: props.mr,
    borderRadius: props.borderRadius,
    elevation: props.elevation,
    buttonStateWidth: props.buttonStateWidth
  }, /*#__PURE__*/_react.default.createElement(_OutlineButton.OutlineButtonStyle, {
    type: props.type,
    onClick: props.onClick,
    size: props.size,
    buttonStyle: props.buttonStyle,
    value: props.value,
    border: props.border
  }, props.text));
};
exports.OutlineButton = OutlineButton;