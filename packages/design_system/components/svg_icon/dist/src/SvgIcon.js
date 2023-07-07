import React from 'react';
import { SvgIconStyle } from './SvgIcon.style';
export const SvgIcon = (props) => {
    return (React.createElement(SvgIconStyle, { viewBox: props.viewBox, width: props.width, height: props.height },
        React.createElement("path", { d: props.path, fill: props.fill })));
};
//# sourceMappingURL=SvgIcon.js.map