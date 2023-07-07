import React from 'react';
import * as AnimationStyle from './AnimationWrapper.style';
export interface AnimationWrapperProps extends AnimationStyle.AnimationStyleWrapperProps {
    children?: JSX.Element | JSX.Element[] | string;
    animateState: string;
}
export declare const AnimationWrapper: (props: AnimationWrapperProps) => React.JSX.Element;
export declare const PageAnimationWrapper: (props: AnimationWrapperProps) => React.JSX.Element;
export declare const DeleteItemAnimationWrapper: (props: AnimationWrapperProps) => React.JSX.Element;
//# sourceMappingURL=AnimationWrapper.d.ts.map