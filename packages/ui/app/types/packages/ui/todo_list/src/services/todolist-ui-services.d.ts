import { IAxiosResponse, ITodoListItemDescription } from '@core/entities';
export declare const mapToListDescription: (response: IAxiosResponse) => ITodoListItemDescription[];
export declare const filterCompletedListItems: (todoListItems: ITodoListItemDescription[]) => ITodoListItemDescription[];
export declare const filterIncompleteListItems: (todoListItems: ITodoListItemDescription[]) => ITodoListItemDescription[];
