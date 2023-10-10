"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = void 0;
var _react = _interopRequireDefault(require("react"));
var _forms = require("@design/forms");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Label = function Label(props) {
  return /*#__PURE__*/_react["default"].createElement(_forms.LabelStyle, {
    htmlFor: props.htmlFor
  }, props.labelText);
};
exports.Label = Label;