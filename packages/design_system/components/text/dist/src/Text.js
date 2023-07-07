import React from 'react';
import { TextStyle } from './Text.style';
export const Text = (props) => {
    return (React.createElement(TextStyle, { color: props.color, fontSize: props.fontSize, fontFamily: props.fontFamily, fontWeight: props.fontWeight }, props.text));
};
//# sourceMappingURL=Text.js.map