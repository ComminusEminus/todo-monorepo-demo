"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StarIcon = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _svgicon = require("@design/svgicon");
var _StarIcon = require("./StarIcon.style");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const StarIcon = props => {
  const theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_svgicon.SvgIcon, {
    viewBox: _StarIcon.StarIconStyle.viewBox,
    width: props.iconSize || _StarIcon.StarIconStyle.width,
    height: props.iconSize || _StarIcon.StarIconStyle.height,
    path: _StarIcon.StarIconStyle.path,
    fill: props.fill || theme.colors.neutral.onBackground
  });
};
exports.StarIcon = StarIcon;