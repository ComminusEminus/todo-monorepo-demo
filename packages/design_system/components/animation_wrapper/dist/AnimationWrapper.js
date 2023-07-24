"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageAnimationWrapper = exports.DeleteItemAnimationWrapper = exports.AnimationWrapper = void 0;
var _react = _interopRequireDefault(require("react"));
var AnimationStyle = _interopRequireWildcard(require("./AnimationWrapper.style"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const AnimationWrapper = props => {
  return /*#__PURE__*/_react.default.createElement(AnimationStyle.AnimationWrapperStyle, {
    animateState: props.animateState
  }, props.children);
};
exports.AnimationWrapper = AnimationWrapper;
const PageAnimationWrapper = props => {
  return /*#__PURE__*/_react.default.createElement(AnimationStyle.PageAnimationWrapperStyle, {
    animateState: props.animateState
  }, props.children);
};
exports.PageAnimationWrapper = PageAnimationWrapper;
const DeleteItemAnimationWrapper = props => {
  return /*#__PURE__*/_react.default.createElement(AnimationStyle.DeleteItemAnimationWrapperStyle, {
    animateState: props.animateState
  }, props.children);
};
exports.DeleteItemAnimationWrapper = DeleteItemAnimationWrapper;