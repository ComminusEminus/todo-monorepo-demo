"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scrim = void 0;
var _react = _interopRequireDefault(require("react"));
var _Scrim = require("../style/Scrim.style");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Scrim = props => {
  return /*#__PURE__*/_react.default.createElement(_Scrim.DefaultScrimStyle, {
    animateState: props.animateState,
    scrimType: props.scrimType
  }, props.children);
};
exports.Scrim = Scrim;