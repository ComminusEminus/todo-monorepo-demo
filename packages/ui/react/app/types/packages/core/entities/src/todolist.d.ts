import { ITodoListItem } from "./todolistitem";
import { Responses } from './enum';
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
    list?: ITodoList;
    message?: Responses;
    error?: any;
}
export interface IGetAllListsResponseDTO {
    lists?: ITodoList;
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
