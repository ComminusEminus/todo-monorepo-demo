import {ITodoList} from './todolist'
import {IHttpResponse} from './http'
export interface ITodoLists{
    userId: string;
    todoLists?: ITodoList[];
}

export interface IGetAllTodoListsResponse extends IHttpResponse{
    data: ITodoLists ;
    status: string;
    statusText: string;
    headers: object;
    config: object;
    request: object;
}


