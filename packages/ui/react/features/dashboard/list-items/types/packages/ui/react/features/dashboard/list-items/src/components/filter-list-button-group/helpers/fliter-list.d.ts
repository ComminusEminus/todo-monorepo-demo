/// <reference types="react" />
import { ITodoListItem } from '@core/entities';
export interface IFilterList {
    selectedList: ITodoListItem[];
    filterListState: string;
    setFilteredList: React.Dispatch<any>;
}
export declare const filterList: ({ filterListState, setFilteredList, selectedList }: IFilterList) => void;
