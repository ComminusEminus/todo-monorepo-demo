import React from "react";
import { ButtonState } from './ButtonState';
import { ButtonStyle, OutlineButtonStyle, TextButtonStyle, SvgButtonStyle } from './Button.style';
const ButtonBase = (props) => {
    return (React.createElement(ButtonStyle, { type: props.type, onClick: props.onClick, size: props.size, width: props.width, buttonStyle: props.buttonStyle, display: props.display, color: props.color, value: props.value }, props.children));
};
export function Button(props) {
    return (React.createElement(ButtonState, { mt: props.mt, mb: props.mb, ml: props.ml, mr: props.mr, borderRadius: props.borderRadius, elevation: props.elevation, buttonStateWidth: props.buttonStateWidth },
        React.createElement(ButtonBase, { type: props.type, onClick: props.onClick, size: props.size, width: props.width, buttonStyle: props.buttonStyle, display: props.display, color: props.color }, props.text)));
}
const OutlineButtonBase = (props) => {
    return (React.createElement(OutlineButtonStyle, { type: props.type, onClick: props.onClick, size: props.size, width: props.width, buttonStyle: props.buttonStyle, display: props.display, color: props.color }, props.children));
};
export const OutlineButton = (props) => {
    return (React.createElement(ButtonState, { mt: props.mt, mb: props.mb, ml: props.ml, mr: props.mr, borderRadius: props.borderRadius, elevation: props.elevation, buttonStateWidth: props.buttonStateWidth },
        React.createElement(OutlineButtonBase, { type: props.type, onClick: props.onClick, size: props.size, width: props.width, display: props.display, color: props.color }, props.text)));
};
const TextButtonBase = (props) => {
    return (React.createElement(TextButtonStyle, { type: props.type, onClick: props.onClick, size: props.size, width: props.width, buttonStyle: props.buttonStyle, display: props.display, color: props.color }, props.children));
};
export const TextButton = (props) => {
    return (React.createElement(ButtonState, { mt: props.mt, mb: props.mb, ml: props.ml, mr: props.mr, borderRadius: props.borderRadius, elevation: props.elevation, buttonStateWidth: props.buttonStateWidth },
        React.createElement(TextButtonStyle, { type: props.type, onClick: props.onClick, size: props.size, width: props.width, display: props.display, color: props.color }, props.text)));
};
const SVGButtonBase = (props) => {
    return (React.createElement(SvgButtonStyle, { type: props.type, onClick: props.onClick, size: props.size, width: props.width, buttonStyle: props.buttonStyle, display: props.display, color: props.color }, props.children));
};
export const SvgButton = (props) => {
    return (React.createElement(ButtonState, { mt: props.mt, mb: props.mb, ml: props.ml, mr: props.mr, borderRadius: props.borderRadius, elevation: props.elevation, buttonStateWidth: props.buttonStateWidth },
        React.createElement(SVGButtonBase, { type: props.type, onClick: props.onClick, size: props.size, width: props.width, display: props.display, color: props.color, children: props.children })));
};
//# sourceMappingURL=Button.js.map