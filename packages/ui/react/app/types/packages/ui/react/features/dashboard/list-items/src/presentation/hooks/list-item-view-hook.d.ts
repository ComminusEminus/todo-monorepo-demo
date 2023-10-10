import { Filter } from '@core/entities';
export declare const ListItemViewHook: () => {
    filterListHandler: (filterString: Filter) => void;
    filterListState: string;
    filteredList: any;
};
