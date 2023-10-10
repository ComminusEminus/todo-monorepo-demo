import React, { Dispatch } from 'react';
import { IAll_Lists_DefaultState, IAll_Lists_Action } from '../reducers/all-lists-reducer';
export interface IAll_Lists_ContextState {
    state: IAll_Lists_DefaultState;
    dispatch: Dispatch<IAll_Lists_Action>;
}
export declare const All_Lists_Default_Context_State: IAll_Lists_ContextState;
export declare const AllListsContext: React.Context<IAll_Lists_ContextState>;
export declare const useAllListsContext: (context?: React.Context<IAll_Lists_ContextState>) => {
    state: IAll_Lists_DefaultState;
    dispatch: React.Dispatch<IAll_Lists_Action>;
};
export interface IAllListsProvider {
    children?: JSX.Element | JSX.Element[] | string;
    defaultState?: IAll_Lists_DefaultState;
}
export declare const AllListsProvider: ({ defaultState, children }: IAllListsProvider) => import("react/jsx-runtime").JSX.Element;
