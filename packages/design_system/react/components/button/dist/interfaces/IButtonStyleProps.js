"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextButtonStyle = exports.SvgButtonStyle = exports.OutlineButtonStyle = exports.ButtonStyle = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/*
padding-top: ${props => props.theme.space.lg};
padding-bottom: ${props => props.theme.space.sm};
padding-left: ${props => props.theme.space.sm};
padding-right: ${props => props.theme.space.sm};
font-size: ${props => props.theme.space.sm};
border: none;
width: ${props => props.width || '100%'};
letter-spacing: .15rem;
height: ${props => props.height};

padding-top: ${props => props.theme.space.xl};
                    padding-bottom: ${props => props.theme.space.xl};

padding-left: ${props => props.theme.space.xl};
                    padding-right: ${props => props.theme.space.xl};
*/
const ButtonStyle = _styledComponents.default.button`
    type: ${props => props.type};
    cursor: inherit;
    
    border-radius: inherit;
    
    font-family: Barlow;
    text-transform: capitalize;

    
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
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
const OutlineButtonStyle = (0, _styledComponents.default)(ButtonStyle)`
    background: transparent; 
    border-color: ${props => props.border || props.theme.colors.primary.base}; 
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    type: ${props => props.type};
    cursor: inherit;
    
    border-radius: inherit;
    color: ${props => props.color || props.theme.colors.neutral.onBackground};
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
`;
exports.OutlineButtonStyle = OutlineButtonStyle;
const TextButtonStyle = (0, _styledComponents.default)(ButtonStyle)`
    background: transparent;
    border: none;
    
    color: ${props => props.theme.colors.neutral.onBackground};
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
`;
exports.TextButtonStyle = TextButtonStyle;
const SvgButtonStyle = (0, _styledComponents.default)(ButtonStyle)`
    background: transparent;
    height: fit-content;
    width: fit-content;
    display: ${props => props.display || 'flex'};
    flex-direction: ${props => props.flexDirection || 'column'};
    justify-content: ${props => props.justifyContent || 'center'};
    align-items: ${props => props.alignItems || 'center'}
    padding: 0px 0px 0px 0px;
    color: ${props => props.theme.colors.neutral.onBackground}
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
                        padding: calc(${props => props.theme.space.xl} + 4rem);
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
`;
exports.SvgButtonStyle = SvgButtonStyle;