/// <reference types="react" />
export interface NavBarTopButtonProps {
    onClick?: () => {};
}
export declare const NavBarTopButton: (props: NavBarTopButtonProps) => import("react/jsx-runtime").JSX.Element;
export interface NavBarTopProps {
    elevation?: string;
    onClick?: () => {};
}
export declare const NavBarTop: (props: NavBarTopProps) => import("react/jsx-runtime").JSX.Element;
export interface NavBarBottomProps {
    children?: string | JSX.Element | JSX.Element[];
    elevation?: string;
}
export declare const NavBarBottom: (props: NavBarBottomProps) => import("react/jsx-runtime").JSX.Element;
