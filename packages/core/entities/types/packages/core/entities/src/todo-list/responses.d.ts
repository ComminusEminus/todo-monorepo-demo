import { ITodoList } from './entities';
import { Responses } from '../common/enum';
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
