import { ITodoListItem } from "./todolistitem";
import { Responses } from './enum';
import { ITodoLists } from './todolists';
export interface ITodoList {
    _id: string;
    title: string;
    listItems: ITodoListItem[];
}
export interface IAddNewTodoListFormResponse {
    title: string;
}
export interface IAddNewListResponseDTO {
    message?: Responses;
    error?: any;
}
export interface IDeleteListResponseDTO {
    message?: Responses;
    error?: any;
}
export interface IGetListByIdResponseDTO {
    list?: ITodoList | null;
    message?: Responses;
    error?: any;
}
export interface IGetAllListsResponseDTO {
    lists?: ITodoLists | null;
    message?: Responses;
    error?: any;
}
export interface IAddNewListRequestDTO {
    title: string;
}
export interface IDeleteListRequestDTO {
    listId: string;
}
export interface IFindListByIdRequestDTO {
    listId: string;
}
export interface IGetAllTodoListsRequestDTO {
}
