"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = void 0;
var _react = _interopRequireDefault(require("react"));
var _text = require("@design/text");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Text = function Text(props) {
  return /*#__PURE__*/_react["default"].createElement(_text.TextStyle, {
    color: props.color,
    fontSize: props.fontSize,
    fontFamily: props.fontFamily,
    fontWeight: props.fontWeight
  }, props.text);
};
exports.Text = Text;