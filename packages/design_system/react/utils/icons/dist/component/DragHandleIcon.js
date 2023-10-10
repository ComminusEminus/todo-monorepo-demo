"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DragHandleIcon = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _svgicon = require("@design/svgicon");
var _DragHandle = require("../source-file/DragHandle.style");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const DragHandleIcon = props => {
  const theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_svgicon.SvgIcon, {
    viewBox: _DragHandle.DragHandleStyle.viewBox,
    width: props.iconSize || _DragHandle.DragHandleStyle.width,
    height: props.iconSize || _DragHandle.DragHandleStyle.height,
    path: _DragHandle.DragHandleStyle.path,
    fill: props.fill || theme.colors.neutral.onBackground
  });
};
exports.DragHandleIcon = DragHandleIcon;