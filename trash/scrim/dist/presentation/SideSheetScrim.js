"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SideSheetScrim = void 0;
var _react = _interopRequireDefault(require("react"));
var _SideSheetScrimStyle = require("../style/SideSheetScrimStyle.style");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const SideSheetScrim = props => {
  return /*#__PURE__*/_react.default.createElement(_SideSheetScrimStyle.SideSheetScrimStyle, {
    animateState: props.animateState,
    scrimType: props.scrimType
  }, props.children);
};
exports.SideSheetScrim = SideSheetScrim;