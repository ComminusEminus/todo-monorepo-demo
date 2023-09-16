"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChevronLeftIcon = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _svgicon = require("@design/svgicon");
var _ChevronLeft = require("../source-file/ChevronLeft.style");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ChevronLeftIcon = props => {
  const theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_svgicon.SvgIcon, {
    viewBox: _ChevronLeft.ChevronLeftStyle.viewBox,
    width: props.iconSize || _ChevronLeft.ChevronLeftStyle.width,
    height: props.iconSize || _ChevronLeft.ChevronLeftStyle.height,
    path: _ChevronLeft.ChevronLeftStyle.path,
    fill: props.fill || theme.colors.neutral.onBackground
  });
};
exports.ChevronLeftIcon = ChevronLeftIcon;