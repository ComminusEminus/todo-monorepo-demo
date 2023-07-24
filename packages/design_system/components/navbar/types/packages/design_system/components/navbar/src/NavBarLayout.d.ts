/// <reference types="react" />
interface NavBarLayoutProps {
    children?: string | JSX.Element | JSX.Element[];
    menuButton?: JSX.Element;
    logo?: JSX.Element;
}
export declare const NavBarLayoutTop: (props: NavBarLayoutProps) => import("react/jsx-runtime").JSX.Element;
export declare const NavBarLayoutBottom: (props: NavBarLayoutProps) => import("react/jsx-runtime").JSX.Element;
export {};
