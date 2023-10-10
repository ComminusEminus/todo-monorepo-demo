"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SvgIcon = void 0;
var _react = _interopRequireDefault(require("react"));
var _svgicon = require("@design/svgicon");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var SvgIcon = function SvgIcon(props) {
  return /*#__PURE__*/_react["default"].createElement(_svgicon.SvgIconStyle, {
    viewBox: props.viewBox,
    width: props.width,
    height: props.height
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: props.path,
    fill: props.fill
  }));
};
exports.SvgIcon = SvgIcon;