"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardStyle = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const CardStyle = _styledComponents.default.div`
    min-width: 20vw;
    min-height: 30vh;
    display: ${props => props.display || 'inline-flex'};
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    ${props => {
  if (props.borderRadius === 'sm') {
    return (0, _styledComponents.css)`border-radius: ${props.theme.borderRadius.sm};`;
  } else if (props.borderRadius === 'md') {
    return (0, _styledComponents.css)`border-radius: ${props.theme.borderRadius.md};`;
  } else if (props.borderRadius == 'lg') {
    return (0, _styledComponents.css)`border-radius: ${props.theme.borderRadius.lg};`;
  } else if (props.borderRadius === 'xl') {
    return (0, _styledComponents.css)`border-radius: ${props.theme.borderRadius.xl};`;
  } else {
    return (0, _styledComponents.css)`border-radius: ${props.theme.borderRadius.md};`;
  }
}}
    ${props => {
  if (props.cardType === 'shadow') {
    return (0, _styledComponents.css)`
                    box-shadow: ${props.theme.shadow.md};
                `;
  } else if (props.cardType === 'filled') {
    return (0, _styledComponents.css)`
                    background: ${props.theme.colors.primary.baseContainer};
                `;
  } else if (props.cardType === 'outline') {
    return (0, _styledComponents.css)`
                    border: ${props.theme.space.xs} solid ${props.theme.colors.primary.baseContainer};
                `;
  }
}}
`;
exports.CardStyle = CardStyle;