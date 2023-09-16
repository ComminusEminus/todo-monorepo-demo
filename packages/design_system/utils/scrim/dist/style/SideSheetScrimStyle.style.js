"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SideSheetScrimStyle = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _animations = require("@design/animations");
var _Scrim = require("./Scrim.style");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const SideSheetScrimStyle = (0, _styledComponents.default)(_Scrim.DefaultScrimStyle)`
    left: 0px;
    top: 0px;
    bottom:0px;
    height: 100vh;
    opacity: 1;

    ${props => {
  if (props.animateState === 'animateOpen') {
    return (0, _styledComponents.css)`
                    animation: ${_animations.slideOpenScrim} .6s forwards;
                    display: flex;
                    
                    
                `;
  } else if (props.animateState === 'animateClose') {
    return (0, _styledComponents.css)`
                        animation: ${_animations.slideCloseScrim} .25s forwards;

                        
                    
                    `;
  } else if (props.animateState == 'static') {
    return (0, _styledComponents.css)`
                    width: 0vh;    
                    height: 0vh;
                    display: none;
                    
                    
                `;
  }
}}
`;
exports.SideSheetScrimStyle = SideSheetScrimStyle;