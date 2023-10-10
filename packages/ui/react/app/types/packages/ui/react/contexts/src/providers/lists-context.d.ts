import React, { Dispatch } from 'react';
import { ITodoList } from '@core/entities';
import { ILists_DefaultState, ILists_Action } from '../reducers/lists-reducer';
export interface ILists_ContextState {
    state: ILists_DefaultState;
    dispatch: Dispatch<ILists_Action>;
}
export declare const Lists_DefaultContextState: ILists_ContextState;
export declare const ListsContext: React.Context<ILists_ContextState>;
export declare const useListsContext: () => {
    state: ILists_DefaultState;
    dispatch: React.Dispatch<ILists_Action>;
};
export interface IListsProvider {
    children?: JSX.Element | JSX.Element[] | string;
    list?: ITodoList;
    defaultState?: ILists_DefaultState;
}
export declare const ListsProvider: ({ children, list, defaultState }: IListsProvider) => import("react/jsx-runtime").JSX.Element;
