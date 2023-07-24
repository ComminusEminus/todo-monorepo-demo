"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = void 0;
var _react = _interopRequireDefault(require("react"));
var _Label = require("./Label.style");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Label = props => {
  return /*#__PURE__*/_react.default.createElement(_Label.LabelStyle, {
    htmlFor: props.htmlFor
  }, props.children);
};
exports.Label = Label;