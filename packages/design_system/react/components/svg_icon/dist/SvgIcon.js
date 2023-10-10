"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SvgIcon = void 0;
var _react = _interopRequireDefault(require("react"));
var _SvgIcon = require("./SvgIcon.style");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const SvgIcon = props => {
  return /*#__PURE__*/_react.default.createElement(_SvgIcon.SvgIconStyle, {
    viewBox: props.viewBox,
    width: props.width,
    height: props.height
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: props.path,
    fill: props.fill
  }));
};
exports.SvgIcon = SvgIcon;