import { Filter } from '@core/entities';
export declare const ListItemView: () => import("react/jsx-runtime").JSX.Element;
export declare const ListItemViewHook: () => {
    filterListHandler: (filterString: Filter) => void;
    filterListState: string;
    filteredList: any;
};
