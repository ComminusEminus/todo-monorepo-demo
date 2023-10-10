"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SvgButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _buttons = require("@design/buttons");
var _SvgIcon = require("../../svg-icon/SvgIcon");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var SvgButton = function SvgButton(props) {
  return /*#__PURE__*/_react["default"].createElement(_buttons.ButtonStateStyle, {
    mt: props.mt,
    mb: props.mb,
    ml: props.ml,
    mr: props.mr,
    borderRadius: props.borderRadius,
    elevation: props.elevation,
    buttonStateWidth: props.buttonStateWidth
  }, /*#__PURE__*/_react["default"].createElement(_buttons.SvgButtonStyle, {
    type: props.type,
    onClick: props.onClick,
    size: props.size,
    width: props.width,
    buttonStyle: props.buttonStyle,
    display: props.display,
    color: props.color,
    height: props.height
  }, /*#__PURE__*/_react["default"].createElement(_SvgIcon.SvgIcon, {
    viewBox: props.viewBox,
    width: props.iconWidth,
    height: props.iconHeight,
    path: props.path,
    fill: props.fill
  })));
};
exports.SvgButton = SvgButton;