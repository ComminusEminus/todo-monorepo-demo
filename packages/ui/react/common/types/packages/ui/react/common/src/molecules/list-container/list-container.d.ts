/// <reference types="react" />
export interface IListContainer {
    listTitle: string;
    listMap: JSX.Element[] | JSX.Element;
    footerOptions: JSX.Element[] | JSX.Element;
    titleOptions?: JSX.Element | JSX.Element[];
}
export declare const ListContainer: ({ listTitle, listMap, footerOptions, titleOptions }: IListContainer) => import("react/jsx-runtime").JSX.Element;
