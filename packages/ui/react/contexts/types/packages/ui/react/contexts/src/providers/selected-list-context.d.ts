import React, { Dispatch } from 'react';
import { ISelected_List_Action, ISelectedList_DefaultState } from '../interfaces/selected-list-interfaces';
export interface ISelectedList_ContextState {
    state: ISelectedList_DefaultState;
    dispatch: Dispatch<ISelected_List_Action>;
}
export declare const Selected_Lists_DefaultContextState: ISelectedList_ContextState;
export declare const SelectedListContext: React.Context<ISelectedList_ContextState>;
export declare const useSelectedListContext: () => {
    state: ISelectedList_DefaultState;
    dispatch: React.Dispatch<ISelected_List_Action>;
};
export interface ISelectedListProvider {
    children?: JSX.Element | JSX.Element[] | string;
    defaultState?: ISelectedList_DefaultState;
}
export declare const SelectedListProvider: ({ children, defaultState }: ISelectedListProvider) => import("react/jsx-runtime").JSX.Element;
