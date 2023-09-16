import { Filter } from '@core/entities';
import { ITodoListItem } from '@core/entities';
export declare const useFilterTodoListItems: () => {
    filterListHandler: (filterString: Filter) => void;
    filteredList: ITodoListItem[] | null;
    filterListState: string;
};
