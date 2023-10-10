/// <reference types="react" />
export interface BottomSheetProps {
    scrimType?: 'TINTED';
    background?: string;
    icon?: string;
    animateState?: string;
    children?: JSX.Element | JSX.Element[] | string;
}
export declare const BottomSheet: (props: BottomSheetProps) => import("react/jsx-runtime").JSX.Element;
