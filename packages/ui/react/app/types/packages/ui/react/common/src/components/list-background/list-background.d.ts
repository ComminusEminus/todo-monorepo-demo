/// <reference types="react" />
export interface IListItemBackground {
    selectedId?: string | null;
    currentId?: string;
    children?: JSX.Element | JSX.Element[] | string;
}
export declare const ListBackground: ({ selectedId, currentId, children }: IListItemBackground) => import("react/jsx-runtime").JSX.Element;
