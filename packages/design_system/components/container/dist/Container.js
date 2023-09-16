"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = void 0;
var _react = _interopRequireDefault(require("react"));
var _Container = require("./Container.style");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Container = props => {
  return /*#__PURE__*/_react.default.createElement(_Container.ContainerStyle, {
    flex: props.flex,
    overflowx: props.overflowx,
    overflowy: props.overflowy,
    overflow: props.overflow,
    width: props.width,
    height: props.height,
    pt: props.pt,
    pb: props.pb,
    pl: props.pl,
    pr: props.pr,
    mb: props.mb,
    mt: props.mt,
    mr: props.mr,
    ml: props.ml,
    padding: props.padding,
    background: props.background,
    display: props.display,
    flexDirection: props.flexDirection,
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
    flexGrow: props.flexGrow,
    flexShrink: props.flexShrink,
    flexBasis: props.flexBasis,
    fontFamily: props.fontFamily,
    gap: props.gap,
    elevation: props.elevation,
    borderRadius: props.borderRadius,
    maxHeight: props.maxHeight,
    boxSizing: props.boxSizing,
    border: props.border
  }, props.children);
};
exports.Container = Container;