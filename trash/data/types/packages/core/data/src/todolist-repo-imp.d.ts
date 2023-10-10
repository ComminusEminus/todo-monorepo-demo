import { ITodoListRepository } from '@core/abstractions';
import { IAddNewListRequestDTO, IDeleteListRequestDTO, IFindListByIdRequestDTO } from '@core/entities';
import { IHttpClientRepository } from '@core/abstractions';
import { IHttpResponse, IHttpInput } from '@core/entities';
export declare class TodoListRepository implements ITodoListRepository<IHttpResponse> {
    dataSource: IHttpClientRepository<IHttpInput, IHttpResponse>;
    constructor(dataSource: IHttpClientRepository<IHttpInput, IHttpResponse>);
    getAllTodosLists(): Promise<IHttpResponse>;
    addNewTodoList(data: IAddNewListRequestDTO): Promise<IHttpResponse>;
    deleteTodoList(data: IDeleteListRequestDTO): Promise<IHttpResponse>;
    getTodoListById(data: IFindListByIdRequestDTO): Promise<IHttpResponse>;
}
