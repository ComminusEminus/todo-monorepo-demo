"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CloseIcon = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _svgicon = require("@design/svgicon");
var _CloseIcon = require("./CloseIcon.style");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const CloseIcon = props => {
  const theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_svgicon.SvgIcon, {
    viewBox: _CloseIcon.CloseIconStyle.viewBox,
    width: props.iconSize || _CloseIcon.CloseIconStyle.width,
    height: props.iconSize || _CloseIcon.CloseIconStyle.height,
    path: _CloseIcon.CloseIconStyle.path,
    fill: props.fill || theme.colors.neutral.onBackground
  });
};
exports.CloseIcon = CloseIcon;