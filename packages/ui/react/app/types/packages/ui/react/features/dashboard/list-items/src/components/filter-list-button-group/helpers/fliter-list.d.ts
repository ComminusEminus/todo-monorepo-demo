/// <reference types="react" />
import { ITodoListItem } from '@core/entities';
export interface IFilterList {
    list: ITodoListItem[];
    filterListState: string;
    setFilteredList: React.Dispatch<any>;
}
export declare const filterList: ({ filterListState, setFilteredList, list }: IFilterList) => void;
