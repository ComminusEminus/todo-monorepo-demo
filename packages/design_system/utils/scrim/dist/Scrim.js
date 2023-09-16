"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SideSheetScrim = exports.Scrim = exports.DialogScrim = exports.BottomSheetScrim = void 0;
var _react = _interopRequireDefault(require("react"));
var ScrimStyle = _interopRequireWildcard(require("./Scrim.style"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Scrim = props => {
  return /*#__PURE__*/_react.default.createElement(ScrimStyle.DefaultScrimStyle, {
    animateState: props.animateState,
    scrimType: props.scrimType
  }, props.children);
};
exports.Scrim = Scrim;
const SideSheetScrim = props => {
  return /*#__PURE__*/_react.default.createElement(ScrimStyle.SideSheetScrimStyle, {
    animateState: props.animateState,
    scrimType: props.scrimType
  }, props.children);
};
exports.SideSheetScrim = SideSheetScrim;
const BottomSheetScrim = props => {
  return /*#__PURE__*/_react.default.createElement(ScrimStyle.BottomSheetScrimStyle, {
    animateState: props.animateState,
    scrimType: props.scrimType
  }, props.children);
};
exports.BottomSheetScrim = BottomSheetScrim;
const DialogScrim = props => {
  return /*#__PURE__*/_react.default.createElement(ScrimStyle.DialogScrimStyle, {
    animateState: props.animateState,
    scrimType: props.scrimType
  }, props.children);
};
exports.DialogScrim = DialogScrim;