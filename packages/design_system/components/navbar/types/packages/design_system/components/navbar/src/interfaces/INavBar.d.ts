/// <reference types="react" />
export interface INavBar {
    children?: string | JSX.Element | JSX.Element[];
    menuItems?: string[] | JSX.Element | JSX.Element[];
    menuButton?: JSX.Element;
    logo?: JSX.Element;
    elevation?: string;
}
