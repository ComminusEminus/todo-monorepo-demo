"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputStyle = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const InputStyle = _styledComponents.default.input`
    appearance: none;
    width: 100%;
    box-sizing: border-box;
    background: ${props => props.theme.colors.neutral.surfaceLow};
    border: ${props => props.border || 'none'};
    border-top-right-radius: ${props => props.theme.borderRadius.sm};
    border-top-left-radius: ${props => props.theme.borderRadius.sm};
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    border-bottom: ${props => props.theme.space.xxs} solid ${props => props.theme.colors.neutral.outline};
    padding-top : calc(${props => props.theme.space.sm} + 5px);
    padding-bottom : ${props => props.theme.space.xs};
    padding-left : ${props => props.theme.space.xs};
    padding-right : ${props => props.theme.space.xs};
    font-family: 'Barlow';
    transition: border-color .25s linear;
    letter-spacing: 1px;
    outline: transparent solid 4px;
    color: ${props => props.theme.colors.neutral.onSurface};
    :focus {
        transition: border-color .25s linear;
        border-color: ${props => props.theme.colors.semantic.successFocus};
    }
    :hover {
        transition: border-color .25s linear;
        outline: ${props => props.theme.colors.semantic.successHover};
    }
    

`;
exports.InputStyle = InputStyle;