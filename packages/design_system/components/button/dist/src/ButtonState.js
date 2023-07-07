import * as React from "react";
import { ButtonStateStyle } from './ButtonState.style';
export function ButtonState(props) {
    return (React.createElement(ButtonStateStyle, { mt: props.mt, mb: props.mb, ml: props.ml, mr: props.mr, borderRadius: props.borderRadius, buttonStyle: props.buttonStyle, elevation: props.elevation, onClick: props.onClick, buttonStateWidth: props.buttonStateWidth }, props.children));
}
//# sourceMappingURL=ButtonState.js.map