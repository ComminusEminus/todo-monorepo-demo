"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrowBackIcon = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _svgicon = require("@design/svgicon");
var _ArrowBack = require("./ArrowBack.style");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ArrowBackIcon = props => {
  const theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_svgicon.SvgIcon, {
    viewBox: _ArrowBack.ArrowBackStyle.viewBox,
    width: props.iconSize || _ArrowBack.ArrowBackStyle.width,
    height: props.iconSize || _ArrowBack.ArrowBackStyle.height,
    path: _ArrowBack.ArrowBackStyle.path,
    fill: props.fill || theme.colors.neutral.onBackground
  });
};
exports.ArrowBackIcon = ArrowBackIcon;