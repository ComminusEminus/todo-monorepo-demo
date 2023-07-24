"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fieldset = void 0;
var _react = _interopRequireDefault(require("react"));
var _Fieldset = require("./Fieldset.style");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Fieldset = props => {
  return /*#__PURE__*/_react.default.createElement(_Fieldset.FieldsetStyle, null, props.children);
};
exports.Fieldset = Fieldset;