import React, { Dispatch } from 'react';
import { ITodoListItem } from '@core/entities';
import { IList_Item_DefaultState, IList_Item_Action } from '../interfaces/list-item-interfaces';
export interface IList_Item_ContextState {
    state: IList_Item_DefaultState;
    dispatch: Dispatch<IList_Item_Action>;
}
export declare const List_Item_DefaultContextState: IList_Item_ContextState;
export declare const ListItemContext: React.Context<IList_Item_ContextState>;
export declare const useListItemContext: () => {
    state: IList_Item_DefaultState;
    dispatch: React.Dispatch<IList_Item_Action>;
};
export interface IListItemProvider {
    children?: JSX.Element | JSX.Element[] | string;
    listItem?: ITodoListItem;
    defaultState?: IList_Item_DefaultState;
}
export declare const ListItemProvider: ({ children, listItem, defaultState }: IListItemProvider) => import("react/jsx-runtime").JSX.Element;
