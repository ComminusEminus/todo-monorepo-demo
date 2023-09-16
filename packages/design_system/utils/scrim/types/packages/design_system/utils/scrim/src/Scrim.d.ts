/// <reference types="react" />
interface ScrimProps {
    borderRadius?: string;
    animateState?: string;
    background?: string;
    scrimType?: "TINTED";
    children?: JSX.Element | JSX.Element[] | string;
}
export declare const Scrim: (props: ScrimProps) => import("react/jsx-runtime").JSX.Element;
export declare const SideSheetScrim: (props: ScrimProps) => import("react/jsx-runtime").JSX.Element;
export declare const BottomSheetScrim: (props: ScrimProps) => import("react/jsx-runtime").JSX.Element;
export declare const DialogScrim: (props: ScrimProps) => import("react/jsx-runtime").JSX.Element;
export {};
