/// <reference types="react" />
import * as AnimationStyle from './AnimationWrapper.style';
export interface AnimationWrapperProps extends AnimationStyle.AnimationStyleWrapperProps {
    children?: JSX.Element | JSX.Element[] | string;
    animateState: string;
}
export declare const AnimationWrapper: (props: AnimationWrapperProps) => import("react/jsx-runtime").JSX.Element;
export declare const PageAnimationWrapper: (props: AnimationWrapperProps) => import("react/jsx-runtime").JSX.Element;
export declare const DeleteItemAnimationWrapper: (props: AnimationWrapperProps) => import("react/jsx-runtime").JSX.Element;
