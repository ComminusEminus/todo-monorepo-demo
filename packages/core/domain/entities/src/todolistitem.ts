import {ListItemStatus} from './enum'

export interface ITodoListItem{
    id: string ;
    title: string;
    description?: string;
    complete: ListItemStatus;
}

export interface IAddNewTodoListItemFormResponse{
    title: string;
    description: string;
}