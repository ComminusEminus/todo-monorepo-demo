"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SideSheet = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _SideSheet = require("./SideSheet.style");
var _scrim = require("@design/scrim");
var _buttons = require("@design/buttons");
var _icons = require("@design/icons");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const SideSheet = props => {
  const theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_scrim.SideSheetScrim, {
    scrimType: props.scrimType,
    animateState: props.animateState
  }, /*#__PURE__*/_react.default.createElement(_SideSheet.SideSheetStyle, {
    animateState: props.animateState
  }, props.children, /*#__PURE__*/_react.default.createElement(_buttons.SvgButton, {
    children: /*#__PURE__*/_react.default.createElement(_icons.ArrowBackIcon, {
      iconSize: theme.space.lg,
      fill: theme.colors.neutral.onSurface
    }),
    elevation: "none",
    onClick: props.sheetHandler
  })));
};
exports.SideSheet = SideSheet;