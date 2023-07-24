"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SideSheetStyle = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _animations = require("@design/animations");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const SideSheetStyle = _styledComponents.default.div`
    background: ${props => props.background || props.theme.colors.neutral.surfaceLow};   
    box-shadow: 0px -10px 15px -10px hsl(0deg 0% 0% / 0.30);
    
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    box-sizing: border-box;
    padding: ${props => props.theme.space.xs};
    transition: opacity .5s linear;
    
    ${props => {
  if (props.animateState === 'animateOpen') {
    return (0, _styledComponents.css)`
                animation: ${_animations.slideOpen} .5s forwards;
                height: 100%;
                & > {
                    opacity: 1;
                    display: inline-flex;
                }
            `;
  } else if (props.animateState === 'animateClose') {
    return (0, _styledComponents.css)`
                    animation: ${_animations.slideClose} .5s forwards;
                    height: 100%;
                    & > div {
                        opacity: 0;
                        display: none;
                    }
                `;
  } else if (props.animateState == 'static') {
    return (0, _styledComponents.css)`
                opacity: 0;
                height: 100%;

                    & > div {
                        opacity: 0;
                        display: none;
                    }
                
                `;
  }
}}
`;
exports.SideSheetStyle = SideSheetStyle;