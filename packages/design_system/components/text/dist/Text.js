"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = void 0;
var _react = _interopRequireDefault(require("react"));
var _Text = require("./Text.style");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Text = props => {
  return /*#__PURE__*/_react.default.createElement(_Text.TextStyle, {
    color: props.color,
    fontSize: props.fontSize,
    fontFamily: props.fontFamily,
    fontWeight: props.fontWeight
  }, props.text);
};
exports.Text = Text;