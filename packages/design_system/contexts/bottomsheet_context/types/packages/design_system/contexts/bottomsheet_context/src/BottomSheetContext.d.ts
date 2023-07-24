import React from 'react';
export interface BottomSheetContextProps {
    sheetHandler?: Function;
    animateState?: string;
}
export declare const BottomSheetContext: React.Context<BottomSheetContextProps>;
export declare const useBottomSheetContext: () => {
    sheetHandler?: Function | undefined;
    animateState?: string | undefined;
};
export interface BottomSheetProviderProps {
    children?: JSX.Element | JSX.Element[];
}
export declare const BottomSheetProvider: (props: BottomSheetProviderProps) => import("react/jsx-runtime").JSX.Element;
