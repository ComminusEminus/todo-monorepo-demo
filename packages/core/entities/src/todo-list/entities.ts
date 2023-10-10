import {ITodoListItem} from '../todo-list-item/entities'

export interface ITodoList {
    _id: string;
    title: string;
    listItems: ITodoListItem[];
}