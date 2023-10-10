import React from 'react';
export interface SideSheetContextProps {
    sheetHandler?: () => void;
    animateState?: string;
}
export declare const SideSheetContext: React.Context<SideSheetContextProps>;
export declare const useSideSheetContext: () => {
    sheetHandler?: (() => void) | undefined;
    animateState?: string | undefined;
};
export interface SideSheetProviderProps {
    children?: JSX.Element | JSX.Element[];
}
export declare const SideSheetProvider: (props: SideSheetProviderProps) => import("react/jsx-runtime").JSX.Element;
