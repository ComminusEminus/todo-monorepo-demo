import { ITodoListItemRepository, IHttpClientRepository } from '@core/abstractions';
import { IFindListItemByIdRequestDTO, IUpdateListItemRequestDTO, IDeleteListItemRequestDTO, IAddNewTodoListItemRequestDTO, IHttpResponse, IHttpInput } from '@core/entities';
export declare class TodoListItemRepository implements ITodoListItemRepository<IHttpResponse> {
    dataSource: IHttpClientRepository<IHttpInput, IHttpResponse>;
    constructor(dataSource: IHttpClientRepository<IHttpInput, IHttpResponse>);
    getTodoListItemById(data: IFindListItemByIdRequestDTO): Promise<IHttpResponse>;
    updateTodoListItem(data: IUpdateListItemRequestDTO): Promise<IHttpResponse>;
    deleteTodoListItem(data: IDeleteListItemRequestDTO): Promise<IHttpResponse>;
    addTodoListItem(data: IAddNewTodoListItemRequestDTO): Promise<IHttpResponse>;
}
