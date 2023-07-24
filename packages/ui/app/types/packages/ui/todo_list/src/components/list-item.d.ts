/// <reference types="react" />
import { ITodoListItemDescription } from '@core/entities';
export interface IListItem {
    item: ITodoListItemDescription;
}
export declare const ListItem: (props: IListItem) => JSX.Element;
