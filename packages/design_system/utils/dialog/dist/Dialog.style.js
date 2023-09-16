"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DialogStyle = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const DialogStyle = _styledComponents.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: ${props => props.theme.borderRadius.md};
    > :first-child{
        border-top-left-radius: ${props => props.theme.borderRadius.md};
        border-top-right-radius: ${props => props.theme.borderRadius.md};
    }
    min-width: 25vh;
    padding: 0px;
    background: ${props => props.theme.colors.neutral.surfaceHigh};
    ${props => {
  if (props.elevation === 'xl') {
    return (0, _styledComponents.css)`box-shadow: ${props.theme.shadow.xl};`;
  } else if (props.elevation === 'lg') {
    return (0, _styledComponents.css)`box-shadow: ${props.theme.shadow.lg};`;
  } else if (props.elevation === 'md') {
    return (0, _styledComponents.css)`box-shadow: ${props.theme.shadow.md};`;
  } else if (props.elevation === 'sm') {
    return (0, _styledComponents.css)`box-shadow: ${props.theme.shadow.sm};`;
  } else {
    return (0, _styledComponents.css)`box-shadow: none`;
  }
}}
`;
exports.DialogStyle = DialogStyle;