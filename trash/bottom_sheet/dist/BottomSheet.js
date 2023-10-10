"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BottomSheet = void 0;
var _react = _interopRequireDefault(require("react"));
var _BottomSheet = require("./BottomSheet.style");
var _scrim = require("@design/scrim");
var _buttons = require("@design/buttons");
var _bottomsheetcontext = require("@design/bottomsheetcontext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const BottomSheetComponent = props => {
  const {
    sheetHandler,
    animateState
  } = (0, _bottomsheetcontext.useBottomSheetContext)();
  return /*#__PURE__*/_react.default.createElement(_scrim.BottomSheetScrim, {
    scrimType: props.scrimType,
    animateState: animateState
  }, /*#__PURE__*/_react.default.createElement(_BottomSheet.BottomSheetStyle, {
    animateState: props.animateState,
    background: props.background
  }, /*#__PURE__*/_react.default.createElement(_buttons.SvgButton, {
    onClick: () => sheetHandler?.()
  }, props.icon), props.children));
};
const BottomSheet = props => {
  return /*#__PURE__*/_react.default.createElement(_bottomsheetcontext.BottomSheetProvider, null, /*#__PURE__*/_react.default.createElement(BottomSheetComponent, {
    scrimType: props.scrimType,
    background: props.background,
    icon: props.icon,
    animateState: props.animateState
  }, props.children));
};
exports.BottomSheet = BottomSheet;