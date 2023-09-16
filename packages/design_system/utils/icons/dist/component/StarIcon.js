"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StarIcon = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _svgicon = require("@design/svgicon");
var _Star = require("../source-file/Star.style");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const StarIcon = props => {
  const theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_svgicon.SvgIcon, {
    viewBox: _Star.StarIconStyle.viewBox,
    width: props.iconSize || _Star.StarIconStyle.width,
    height: props.iconSize || _Star.StarIconStyle.height,
    path: _Star.StarIconStyle.path,
    fill: props.fill || theme.colors.neutral.onBackground
  });
};
exports.StarIcon = StarIcon;