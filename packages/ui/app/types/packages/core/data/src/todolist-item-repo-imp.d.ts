import { ITodoListItemRepository } from '@core/abstractions';
import { IFindListItemByIdRequestDTO, IUpdateListItemRequestDTO, IDeleteListItemRequestDTO, IAddNewTodoListItemRequestDTO, IHttpResponse } from '@core/entities';
import { HttpClientRepository } from './http-client-repo-imp';
export declare class TodoListItemRepository implements ITodoListItemRepository<IHttpResponse> {
    dataSource: HttpClientRepository;
    constructor(dataSource: HttpClientRepository);
    getTodoListItemById(data: IFindListItemByIdRequestDTO): Promise<IHttpResponse>;
    updateTodoListItem(data: IUpdateListItemRequestDTO): Promise<IHttpResponse>;
    deleteTodoListItem(data: IDeleteListItemRequestDTO): Promise<IHttpResponse>;
    addTodoListItem(data: IAddNewTodoListItemRequestDTO): Promise<IHttpResponse>;
}
