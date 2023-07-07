import React from 'react';
import { LabelStyle } from './Label.style';
export const Label = (props) => {
    return (React.createElement(LabelStyle, { htmlFor: props.htmlFor }, props.children));
};
//# sourceMappingURL=Label.js.map