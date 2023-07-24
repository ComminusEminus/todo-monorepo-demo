import { ITodoListItem } from "./todolistitem";
export interface ITodoList {
    id: string;
    title: string;
    listItems: ITodoListItem[];
}
export interface IAddNewTodoListFormResponse {
    title: string;
}
