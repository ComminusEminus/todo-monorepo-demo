/// <reference types="react" />
export interface BottomSheetProps {
    scrimType?: string;
    background?: string;
    icon?: string;
    animateState?: string;
    children?: JSX.Element | JSX.Element[] | string;
}
export declare const BottomSheet: (props: BottomSheetProps) => import("react/jsx-runtime").JSX.Element;
