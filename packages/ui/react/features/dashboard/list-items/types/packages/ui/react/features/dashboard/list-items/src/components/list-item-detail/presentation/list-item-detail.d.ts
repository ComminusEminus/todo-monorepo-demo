import { ITodoListItem } from '@core/entities';
export interface IDisplayListItemDetails {
    displayItem: ITodoListItem;
}
export declare const ListItemDetail: ({ displayItem }: IDisplayListItemDetails) => import("react/jsx-runtime").JSX.Element;
