import { ITodoListItem, Filter } from '@core/entities'
import { filterCompleteListItems } from './filter-complete-list-items'
import { filterIncompleteListItems } from './filter-incomplete-list-items'

export interface IFilterList {

    list: ITodoListItem[];
    filterListState: string;
    setFilteredList: React.Dispatch<any>;
}

export const filterList = ({ filterListState, setFilteredList, list }: IFilterList) => {
    if (filterListState === Filter.ALL_LIST_ITEMS) {
        setFilteredList(list)
    } else if (filterListState === Filter.COMPLETE_LIST_ITEMS) {
        setFilteredList(() => filterCompleteListItems(list))
    } else if (filterListState === Filter.INCOMPLETE_LIST_ITEMS) {
        setFilteredList(() => filterIncompleteListItems(list))
    }
}