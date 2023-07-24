"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonStateStyle = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const ButtonStateStyle = _styledComponents.default.div`
    type: ${props => props.type}
    width: ${props => props.buttonStateWidth || 'fit-content'};
    height: fit-content;
    cursor: pointer;
    border: none;
    opacity: 1;
    padding: 0px 0px 0px 0px;
    margin-top: ${props => props.mt || '0px'};
    margin-bottom: ${props => props.mb || '0px'};
    margin-right: ${props => props.mr || '0px'};
    margin-left: ${props => props.ml || '0px'};
    border-radius: ${props => {
  if (props.borderRadius === 'sm') {
    return `${props.theme.borderRadius.sm}`;
  } else if (props.borderRadius === 'md') {
    return `${props.theme.borderRadius.md}`;
  } else if (props.borderRadius === 'lg') {
    return `${props.theme.borderRadius.lg}`;
  } else if (props.borderRadius === 'xl') {
    return `${props.theme.borderRadius.xl}`;
  } else {
    return `${props.theme.borderRadius.xl}`;
  }
}};
    transition: opacity .35s ease-in;
    ${props => {
  if (props.buttonStyle === 'primary') {
    return (0, _styledComponents.css)`
                    background: ${props => props.theme.colors.primary.onBase};
                `;
  } else if (props.buttonStyle === 'secondary') {
    return (0, _styledComponents.css)`
                    background: ${props => props.theme.colors.secondary.onBase};
                `;
  } else if (props.buttonStyle === 'tertiary') {
    return (0, _styledComponents.css)`
                    background: ${props => props.theme.colors.tertiary.onBase};
                `;
  } else {
    return (0, _styledComponents.css)`
                    background: ${props.background};
                `;
  }
}}
    ${props => {
  if (props.elevation == 'sm') {
    return (0, _styledComponents.css)`box-shadow: ${props.theme.shadow.sm};`;
  } else if (props.elevation == 'md') {
    return (0, _styledComponents.css)`box-shadow: ${props.theme.shadow.md};`;
  } else if (props.elevation == 'lg') {
    return (0, _styledComponents.css)`box-shadow: ${props.theme.shadow.lg};`;
  } else if (props.elevation == 'xl') {
    return (0, _styledComponents.css)`box-shadow: ${props.theme.shadow.xl};`;
  } else {
    return (0, _styledComponents.css)`box-shadow: none;`;
  }
}}
    &: hover {
        transition: opacity .25s ease-out;
        opacity: ${props => props.theme.opacityState.hover};
    };
    &: active {
        transition: opacity .25s ease-out;
        opacity: ${props => props.theme.opacityState.focus};
    };
    &: disabled {
        opacity: ${props => props.theme.opacityState.disabledStateLayer};
        background: ${props => props.theme.colors.neutral.onBackground};
    };
`;
exports.ButtonStateStyle = ButtonStateStyle;