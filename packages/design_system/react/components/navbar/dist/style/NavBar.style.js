"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavBarStyle = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _container = require("@design/container");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const NavBarStyle = (0, _styledComponents.default)(_container.ContainerStyle)`
    position: absolute;
    height: auto;
    z-index: 4000;
    left: 0px;
    right: 0px;
    justify-content: ${props => props.justifyContent || 'stretch'};
    align-items: ${props => props.alignItems || 'stretch'};
    box-shadow: ${props => props.elevation || props.theme.shadow.sm};
    ${props => {
  if (props.position === 'top') {
    return (0, _styledComponents.css)`
                    top: 0px;
                `;
  } else if (props.position === 'bottom') {
    return (0, _styledComponents.css)`
                    bottom: 0px;
                `;
  }
}}
`;
exports.NavBarStyle = NavBarStyle;