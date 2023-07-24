"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContainerStyle = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const ContainerStyle = _styledComponents.default.div`

    height: ${props => props.height || '100%'};
    max-height: ${props => props.maxHeight};
    width: ${props => props.width || 'auto'};
    background: ${props => props.background || 'transparent'};
    display: ${props => props.display || 'flex'};
    flex-direction: ${props => props.flexDirection || 'row'};
    justify-content: ${props => props.justifyContent || 'center'};
    align-items: ${props => props.alignItems || 'center'};
    padding: ${props => props.padding || props.theme.space.sm};
    padding-top: ${props => props.pt || '0px'};
    padding-bottom: ${props => props.pb || '0px'};
    padding-left: ${props => props.pl || '0px'};
    padding-right: ${props => props.pr || '0px'};
    margin-bottom: ${props => props.mb || '0px'};
    margin-top: ${props => props.mt || '0px'};
    margin-right: ${props => props.mr || '0px'};
    margin-left: ${props => props.ml || '0px'};
    flex-grow: ${props => props.flexGrow || 1};
    flex-shrink: ${props => props.flexShrink || 1};
    flex-basis: ${props => props.flexBasis || 0};
    gap: ${props => props.gap}
    font-family: ${props => props.fontFamily};
    box-sizing: ${props => props.boxSizing || 'border-box'};
    border-radius: ${props => props.borderRadius || 0};
    ${props => {
  if (props.elevation === 'sm') {
    return (0, _styledComponents.css)`box-shadow: ${props.theme.shadow.sm};`;
  } else if (props.elevation === 'md') {
    return (0, _styledComponents.css)`box-shadow: ${props.theme.shadow.md};`;
  } else if (props.elevation === 'lg') {
    return (0, _styledComponents.css)`box-shadow: ${props.theme.shadow.lg};`;
  } else if (props.elevation === 'xl') {
    return (0, _styledComponents.css)`box-shadow: ${props.theme.shadow.xl};`;
  } else {
    return (0, _styledComponents.css)`box-shadow: none;`;
  }
}}
`;
exports.ContainerStyle = ContainerStyle;