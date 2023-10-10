"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BottomSheetScrim = void 0;
var _react = _interopRequireDefault(require("react"));
var _BottomSheetScrimStyle = require("../style/BottomSheetScrimStyle.style");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const BottomSheetScrim = props => {
  return /*#__PURE__*/_react.default.createElement(_BottomSheetScrimStyle.BottomSheetScrimStyle, {
    animateState: props.animateState,
    scrimType: props.scrimType
  }, props.children);
};
exports.BottomSheetScrim = BottomSheetScrim;