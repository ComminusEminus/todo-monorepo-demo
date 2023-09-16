"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogoutIcon = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _svgicon = require("@design/svgicon");
var _logout = require("../source-file/logout.style");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const LogoutIcon = props => {
  const theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_svgicon.SvgIcon, {
    viewBox: _logout.LogoutStyle.viewBox,
    width: props.iconSize || _logout.LogoutStyle.width,
    height: props.iconSize || _logout.LogoutStyle.height,
    path: _logout.LogoutStyle.path,
    fill: props.fill || theme.colors.neutral.onBackground
  });
};
exports.LogoutIcon = LogoutIcon;