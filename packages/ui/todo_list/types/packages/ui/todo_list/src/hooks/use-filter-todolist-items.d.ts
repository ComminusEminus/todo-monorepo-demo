import React from 'react';
import { ITodoListItemDescription } from '@core/entities';
export interface IUseFilterTodoListItems {
    list?: ITodoListItemDescription[];
}
export declare const useFilterTodoListItems: (list: ITodoListItemDescription[]) => {
    filterListHandler: (e: React.MouseEvent<HTMLInputElement>) => void;
    filteredList: ITodoListItemDescription[] | undefined;
};
