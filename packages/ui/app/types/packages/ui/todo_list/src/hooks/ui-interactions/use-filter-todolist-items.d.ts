import React from 'react';
import { ITodoListItem } from '@core/entities';
export declare const useFilterTodoListItems: () => {
    filterListHandler: (e: React.MouseEvent<HTMLInputElement>) => void;
    filteredList: ITodoListItem[] | null;
    filterListState: string;
};
