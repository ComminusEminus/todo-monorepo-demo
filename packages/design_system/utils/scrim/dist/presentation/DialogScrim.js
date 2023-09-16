"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DialogScrim = void 0;
var _react = _interopRequireDefault(require("react"));
var _DialogScrimStyle = require("../style/DialogScrimStyle.style");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const DialogScrim = props => {
  return /*#__PURE__*/_react.default.createElement(_DialogScrimStyle.DialogScrimStyle, {
    animateState: props.animateState,
    scrimType: props.scrimType
  }, props.children);
};
exports.DialogScrim = DialogScrim;