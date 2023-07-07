import { IHttpClient } from '@core/entities';
import { ITodoListItemRepository } from '@core/abstractions';
import { IAddNewTodoListItemFormResponse, ITodoListItem, IAxiosResponse } from '@core/entities';
export declare class TodoListItemRepoImp implements ITodoListItemRepository {
    dataSource: IHttpClient;
    constructor(dataSource: IHttpClient);
    getTodoListItemById(todoListItemId: string): Promise<IAxiosResponse>;
    updateTodoListItem(updateData: ITodoListItem): Promise<IAxiosResponse>;
    deleteTodoListItem(listItemId: string, listId: string): Promise<IAxiosResponse>;
    addTodoListItem(todoListItemId: string, listItem: IAddNewTodoListItemFormResponse): Promise<IAxiosResponse>;
}
//# sourceMappingURL=todolist-item-repo-imp.d.ts.map