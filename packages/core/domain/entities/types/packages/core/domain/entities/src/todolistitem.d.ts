import { ListItemStatus } from './enum';
export interface ITodoListItem {
    _id?: string;
    id: string;
    title: string;
    description?: string;
    complete: ListItemStatus;
}
export interface IAddNewTodoListItemFormResponse {
    title: string;
    description: string;
}
export interface ITodoListItemDescription {
    id: string;
    title: string;
    complete: ListItemStatus;
}
