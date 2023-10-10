import { ITodoList } from './todolist';
import { IHttpResponse } from './http';
export interface ITodoListContainer {
    userId: string;
    todoLists?: ITodoList[];
}
export interface IGetAllTodoListsResponse extends IHttpResponse {
    data: ITodoListContainer;
    status: string;
    statusText: string;
    headers: object;
    config: object;
    request: object;
}
