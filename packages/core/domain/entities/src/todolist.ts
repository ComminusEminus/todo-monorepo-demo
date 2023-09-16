import {ITodoListItem } from "./todolistitem";
import {Responses} from './enum'
import {ITodoLists} from './todolists'
export interface ITodoList {
    _id: string;
    title: string;
    listItems: ITodoListItem[];
}
//Responses
export interface IAddNewTodoListFormResponse{
    title: string
}

export interface IAddNewListResponseDTO{
    message?: Responses
    error?: any
}
export interface IDeleteListResponseDTO{
    message?: Responses
    error?: any
}
export interface IGetListByIdResponseDTO{
    list?: ITodoList | null
    message?: Responses
    error?: any
}
export interface IGetAllListsResponseDTO{
    lists?: ITodoLists | null
    message?: Responses
    error?: any
}
//Requests
export interface IAddNewListRequestDTO{
    title: string;
    //userId: string;
    //token: string;
}
export interface IDeleteListRequestDTO{
    listId: string;
    //userId: string;
    //token: string;
}
export interface IFindListByIdRequestDTO{
    listId: string;
    //token: string;
}
export interface IGetAllTodoListsRequestDTO{
    //userId: string;
    //token: string;
}