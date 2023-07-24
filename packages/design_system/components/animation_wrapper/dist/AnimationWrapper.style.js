"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageAnimationWrapperStyle = exports.DeleteItemAnimationWrapperStyle = exports.DefaultAnimationWrapperStyle = exports.AnimationWrapperStyle = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _animations = require("@design/animations");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const DefaultAnimationWrapperStyle = _styledComponents.default.div`
    width: auto;
    height: 100%;
    box-sizing: border-box;
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
`;
exports.DefaultAnimationWrapperStyle = DefaultAnimationWrapperStyle;
const AnimationWrapperStyle = (0, _styledComponents.default)(DefaultAnimationWrapperStyle)`
    width: 100%;

    ${props => {
  if (props.animateState === 'animateIn') {
    return (0, _styledComponents.css)`animation: ${_animations.animateIn} .6s forwards;`;
  } else if (props.animateState === 'animateOut') {
    return (0, _styledComponents.css)`animation: ${_animations.animateOut} .6s forwards;`;
  }
}}

`;
exports.AnimationWrapperStyle = AnimationWrapperStyle;
const PageAnimationWrapperStyle = (0, _styledComponents.default)(DefaultAnimationWrapperStyle)`
    width: 100%;
    padding-top: ${props => props.theme.space.xl};
    padding-left: ${props => props.theme.space.xl};
    padding-right: ${props => props.theme.space.xl};
    padding-bottom: ${props => props.theme.space.xl};

    ${props => {
  if (props.animateState === 'animateIn') {
    return (0, _styledComponents.css)`animation: ${_animations.animatePageIn} .6s forwards;`;
  } else if (props.animateState == 'static') {
    return (0, _styledComponents.css)`
                    width: 100%;
                    height: 100%;
                `;
  }
}}

`;
exports.PageAnimationWrapperStyle = PageAnimationWrapperStyle;
const DeleteItemAnimationWrapperStyle = (0, _styledComponents.default)(DefaultAnimationWrapperStyle)`

    ${props => {
  if (props.animateState === 'VISIBLE') {
    return (0, _styledComponents.css)`animation: none;`;
  } else if (props.animateState === 'INVISIBLE') {
    return (0, _styledComponents.css)`animation: ${_animations.deleteItemAnimation} .6s forwards;`;
  }
}}

`;
exports.DeleteItemAnimationWrapperStyle = DeleteItemAnimationWrapperStyle;