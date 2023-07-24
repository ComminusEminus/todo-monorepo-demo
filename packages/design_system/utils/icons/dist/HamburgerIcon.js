"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HamburgerIcon = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _svgicon = require("@design/svgicon");
var _HamburgerIcon = require("./HamburgerIcon.style");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const HamburgerIcon = props => {
  const theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_svgicon.SvgIcon, {
    viewBox: _HamburgerIcon.HamburgerIconStyle.viewBox,
    width: props.iconSize || _HamburgerIcon.HamburgerIconStyle.width,
    height: props.iconSize || _HamburgerIcon.HamburgerIconStyle.height,
    path: _HamburgerIcon.HamburgerIconStyle.path,
    fill: props.fill || theme.colors.neutral.onBackground
  });
};
exports.HamburgerIcon = HamburgerIcon;