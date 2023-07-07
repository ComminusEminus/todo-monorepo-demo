import React from 'react';
import * as ScrimStyle from './Scrim.style';
export const Scrim = (props) => {
    return (React.createElement(ScrimStyle.DefaultScrimStyle, { animateState: props.animateState, scrimType: props.scrimType }, props.children));
};
export const SideSheetScrim = (props) => {
    return (React.createElement(ScrimStyle.SideSheetScrimStyle, { animateState: props.animateState, scrimType: props.scrimType }, props.children));
};
export const BottomSheetScrim = (props) => {
    return (React.createElement(ScrimStyle.BottomSheetScrimStyle, { animateState: props.animateState, scrimType: props.scrimType }, props.children));
};
export const DialogScrim = (props) => {
    return (React.createElement(ScrimStyle.DialogScrimStyle, { animateState: props.animateState, scrimType: props.scrimType }, props.children));
};
//# sourceMappingURL=Scrim.js.map