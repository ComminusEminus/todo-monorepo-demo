import React from 'react';
import { ITodoListItem, ListItemStatus, Visibility, ITodoListItemDescription } from '@core/entities';
export interface IListItemContext {
    originalState?: ITodoListItemDescription;
    setCompleteState?: (arg: ListItemStatus.INCOMPLETE | ListItemStatus.COMPLETED | undefined) => void;
    completeState?: ITodoListItem['complete'];
    setVisibilityState?: (arg: Visibility.VISIBLE | Visibility.INVISIBLE) => void;
    visibilityState?: Visibility.VISIBLE | Visibility.INVISIBLE;
    viewTodoListItem?: string;
    setViewTodoListItem?: (arg: string) => void;
}
export declare const ListItemContext: React.Context<IListItemContext>;
export declare const useListItemContext: () => {
    originalState?: ITodoListItemDescription | undefined;
    setCompleteState?: ((arg: ListItemStatus.INCOMPLETE | ListItemStatus.COMPLETED | undefined) => void) | undefined;
    completeState?: ListItemStatus | undefined;
    setVisibilityState?: ((arg: Visibility.VISIBLE | Visibility.INVISIBLE) => void) | undefined;
    visibilityState?: Visibility | undefined;
    viewTodoListItem?: string | undefined;
    setViewTodoListItem?: ((arg: string) => void) | undefined;
};
export interface IListItemProvider {
    children?: JSX.Element | JSX.Element[] | string;
    listItem?: ITodoListItemDescription;
}
export declare const ListItemProvider: (props: IListItemProvider) => import("react/jsx-runtime").JSX.Element;
