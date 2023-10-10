"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fieldset = void 0;
var _react = _interopRequireDefault(require("react"));
var _forms = require("@design/forms");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Fieldset = function Fieldset(props) {
  return /*#__PURE__*/_react["default"].createElement(_forms.FieldsetStyle, null, props.children);
};
exports.Fieldset = Fieldset;