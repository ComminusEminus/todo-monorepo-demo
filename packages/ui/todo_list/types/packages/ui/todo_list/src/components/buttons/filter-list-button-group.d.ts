import { Filter } from '@core/entities';
export interface IFilterListButtonGroup {
    filterListHandler: (filterString: Filter) => void;
    filterListState?: string;
}
export declare const FilterListButtonGroup: (props: IFilterListButtonGroup) => import("react/jsx-runtime").JSX.Element;
