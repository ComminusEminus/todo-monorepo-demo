"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChevronRightIcon = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _svgicon = require("@design/svgicon");
var _ChevronRight = require("../source-file/ChevronRight.style");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ChevronRightIcon = props => {
  const theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_svgicon.SvgIcon, {
    viewBox: _ChevronRight.ChevronRightStyle.viewBox,
    width: props.iconSize || _ChevronRight.ChevronRightStyle.width,
    height: props.iconSize || _ChevronRight.ChevronRightStyle.height,
    path: _ChevronRight.ChevronRightStyle.path,
    fill: props.fill || theme.colors.neutral.onBackground
  });
};
exports.ChevronRightIcon = ChevronRightIcon;