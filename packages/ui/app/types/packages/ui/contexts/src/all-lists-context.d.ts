import React from 'react';
import { Visibility, ITodoListAsListDescription } from '@core/entities';
export interface IListContext {
    originalState?: ITodoListAsListDescription;
    setViewTodoList?: (arg: string) => void;
    viewTodoList?: string;
    setVisibilityState?: (arg: Visibility.VISIBLE | Visibility.INVISIBLE) => void;
    visibilityState?: Visibility.VISIBLE | Visibility.INVISIBLE;
}
export declare const ListsContext: React.Context<IListContext>;
export declare const useListsContext: () => {
    originalState?: ITodoListAsListDescription | undefined;
    setViewTodoList?: ((arg: string) => void) | undefined;
    viewTodoList?: string | undefined;
    setVisibilityState?: ((arg: Visibility.VISIBLE | Visibility.INVISIBLE) => void) | undefined;
    visibilityState?: Visibility | undefined;
};
export interface IListsProvider {
    children?: JSX.Element | JSX.Element[] | string;
    list?: ITodoListAsListDescription;
}
export declare const ListsProvider: (props: IListsProvider) => import("react/jsx-runtime").JSX.Element;
