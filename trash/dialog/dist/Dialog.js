"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dialog = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _Dialog = require("./Dialog.style");
var _scrim = require("@design/scrim");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Dialog = props => {
  const theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_scrim.DialogScrim, null, /*#__PURE__*/_react.default.createElement(_Dialog.DialogStyle, {
    elevation: props.elevation
  }, props.children));
};
exports.Dialog = Dialog;