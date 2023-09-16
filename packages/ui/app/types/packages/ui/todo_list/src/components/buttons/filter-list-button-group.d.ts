import React from 'react';
export interface IFilterListButtonGroup {
    filterListHandler: (e: React.MouseEvent<HTMLInputElement>) => void;
    filterListState?: string;
}
export declare const FilterListButtonGroup: (props: IFilterListButtonGroup) => import("react/jsx-runtime").JSX.Element;
