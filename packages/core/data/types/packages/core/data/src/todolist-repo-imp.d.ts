import { ITodoListRepository } from '@core/abstractions';
import { IAddNewListRequestDTO, IDeleteListRequestDTO, IFindListByIdRequestDTO } from '@core/entities';
import { HttpClientRepository } from './http-client-repo-imp';
import { IHttpResponse } from '@core/entities';
export declare class TodoListRepository implements ITodoListRepository<IHttpResponse> {
    dataSource: HttpClientRepository;
    constructor(dataSource: HttpClientRepository);
    getAllTodosLists(): Promise<IHttpResponse>;
    addNewTodoList(data: IAddNewListRequestDTO): Promise<IHttpResponse>;
    deleteTodoList(data: IDeleteListRequestDTO): Promise<IHttpResponse>;
    getTodoListById(data: IFindListByIdRequestDTO): Promise<IHttpResponse>;
}
