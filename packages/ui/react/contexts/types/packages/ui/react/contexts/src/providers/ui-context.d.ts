import React, { Dispatch } from 'react';
import { IUIDefaultState, IUIAction } from '../interfaces/ui-interfaces';
export interface IUIContextState {
    state: IUIDefaultState;
    dispatch: Dispatch<IUIAction>;
}
export declare const UIDefaultContextState: IUIContextState;
export declare const UIContext: React.Context<IUIContextState>;
export declare const useUIContext: (context?: React.Context<IUIContextState>) => {
    state: IUIDefaultState;
    dispatch: React.Dispatch<IUIAction>;
};
export interface IUIProvider {
    children?: JSX.Element | JSX.Element[];
    defaultState?: IUIDefaultState;
}
export declare const UIProvider: ({ defaultState, children }: IUIProvider) => import("react/jsx-runtime").JSX.Element;
