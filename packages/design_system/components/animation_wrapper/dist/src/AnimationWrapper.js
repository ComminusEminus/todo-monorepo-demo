import React from 'react';
import * as AnimationStyle from './AnimationWrapper.style';
export const AnimationWrapper = (props) => {
    return (React.createElement(AnimationStyle.AnimationWrapperStyle, { animateState: props.animateState }, props.children));
};
export const PageAnimationWrapper = (props) => {
    return (React.createElement(AnimationStyle.PageAnimationWrapperStyle, { animateState: props.animateState }, props.children));
};
export const DeleteItemAnimationWrapper = (props) => {
    return (React.createElement(AnimationStyle.DeleteItemAnimationWrapperStyle, { animateState: props.animateState }, props.children));
};
//# sourceMappingURL=AnimationWrapper.js.map