/// <reference types="react" />
import { ITodoListItem } from '@core/entities';
export interface IListItem {
    item: ITodoListItem;
}
export declare const ListItem: ({ item }: IListItem) => JSX.Element;
