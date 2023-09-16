"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonStyle = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const ButtonStyle = _styledComponents.default.button`
    type: ${props => props.type};
    cursor: inherit;
    
    border-radius: inherit;
    padding: ${props => props.padding};
    font-family: ${props => props.fontFamily || 'Barlow'};
    text-transform: capitalize;
    background: ${props => props.background};
    text-align: ${props => props.textAlign};  
    box-sizing: border-box;
    display: ${props => props.display};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    color: ${props => props.color || props.theme.colors.neutral.onBackground}
    
    ${props => {
  if (props.size === 'lg') {
    return (0, _styledComponents.css)`
                        padding: calc(${props => props.theme.space.xs});
                        width: calc(${props => props.theme.space.xl} + 15rem);
                        height: calc(${props => props.theme.space.xl});
                        font-size: calc(${props => props.theme.space.sm} + 1rem);
                    `;
  } else if (props.size === 'sm') {
    return (0, _styledComponents.css)`
                        padding: calc(${props => props.theme.space.xs});
                        width: calc(${props => props.theme.space.xl} + 10rem);
                        height: calc(${props => props.theme.space.xl});
                        font-size: calc(${props => props.theme.space.sm} + .3rem);
                    `;
  } else {
    return (0, _styledComponents.css)`
                        padding-top: ${props.pt || 0};
                        padding-bottom: ${props.pb || 0};
                        padding-left: ${props.pl || 0};
                        padding-right: ${props.pr || 0};
                    `;
  }
}}
    
    ${props => {
  if (props.buttonStyle === 'primary') {
    return (0, _styledComponents.css)`
                    background: ${props => props.theme.colors.primary.base};
                    color: ${props => props.theme.colors.primary.onBase};
                    border: ${props => props.theme.colors.primary.base} solid ${props.theme.space.xxs};
                `;
  } else if (props.buttonStyle === 'secondary') {
    return (0, _styledComponents.css)`
                    background: ${props => props.theme.colors.secondary.base};
                    color: ${props => props.theme.colors.secondary.onBase};
                    border: ${props => props.theme.colors.secondary.base} solid ${props.theme.space.xxs};
                `;
  } else if (props.buttonStyle === 'tertiary') {
    return (0, _styledComponents.css)`
                    background: ${props => props.theme.colors.tertiary.base};
                    color: ${props => props.theme.colors.tertiary.onBase};
                    border: ${props => props.theme.colors.tertiary.base} solid ${props.theme.space.xxs};
                `;
  } else if (props.buttonStyle === 'success') {
    return (0, _styledComponents.css)`
                    background: ${props => props.theme.colors.semantic.success};
                    color: ${props => props.theme.colors.neutral.surfaceHigh};
                    border: ${props => props.theme.colors.semantic.success} solid ${props.theme.space.xxs};
                `;
  } else if (props.buttonStyle === 'error') {
    return (0, _styledComponents.css)`
                    background: ${props => props.theme.colors.semantic.error};
                    color: ${props => props.theme.colors.semantic.onError};
                    border: ${props => props.theme.colors.semantic.error} solid ${props.theme.space.xxs};
                `;
  }
}}
    &: disabled {
        border: ${props => props.theme.colors.primary.baseDisabled};
        background: ${props => props.theme.colors.primary.baseDisabled};
        opacity: ${props => props.theme.opacityState.disabledContainer};
        color: ${props => props.theme.colors.neutral.onBackground};
    };
`;
exports.ButtonStyle = ButtonStyle;