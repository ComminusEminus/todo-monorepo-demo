import { ITodoListItemRepository } from '@core/abstractions';
import { IAddNewTodoListItemFormResponse, ITodoListItem, IAxiosResponse, IHttpClient } from '@core/entities';
export declare class TodoListItemRepoImp implements ITodoListItemRepository {
    dataSource: IHttpClient;
    constructor(dataSource: IHttpClient);
    getTodoListItemById(todoListItemId: string): Promise<IAxiosResponse>;
    updateTodoListItem(updateData: ITodoListItem): Promise<IAxiosResponse>;
    deleteTodoListItem(listItemId: string, listId: string): Promise<IAxiosResponse>;
    addTodoListItem(todoListItemId: string, listItem: IAddNewTodoListItemFormResponse): Promise<IAxiosResponse>;
}
