"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _buttons = require("@design/buttons");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var TextButton = function TextButton(props) {
  return /*#__PURE__*/_react["default"].createElement(_buttons.ButtonStateStyle, {
    mt: props.mt,
    mb: props.mb,
    ml: props.ml,
    mr: props.mr,
    borderRadius: props.borderRadius,
    elevation: props.elevation,
    buttonStateWidth: props.buttonStateWidth
  }, /*#__PURE__*/_react["default"].createElement(_buttons.TextButtonStyle, {
    type: props.type,
    onClick: props.onClick,
    size: props.size,
    buttonStyle: props.buttonStyle,
    value: props.value,
    width: props.width,
    color: props.color,
    textAlign: props.textAlign
  }, props.text));
};
exports.TextButton = TextButton;