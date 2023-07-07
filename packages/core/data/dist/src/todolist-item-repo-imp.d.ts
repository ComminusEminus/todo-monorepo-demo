import { IHttpClient } from '@todo/entities';
import { ITodoListItemRepository } from '@todo/abstractions';
import { IAddNewTodoListItemFormResponse, ITodoListItem, IAxiosResponse } from '@todo/entities';
export declare class TodoListItemRepoImp implements ITodoListItemRepository {
    dataSource: IHttpClient;
    constructor(dataSource: IHttpClient);
    getTodoListItemById(todoListItemId: string): Promise<IAxiosResponse>;
    updateTodoListItem(updateData: ITodoListItem): Promise<IAxiosResponse>;
    deleteTodoListItem(listItemId: string, listId: string): Promise<IAxiosResponse>;
    addTodoListItem(todoListItemId: string, listItem: IAddNewTodoListItemFormResponse): Promise<IAxiosResponse>;
}
//# sourceMappingURL=todolist-item-repo-imp.d.ts.map