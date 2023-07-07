import { ITodoListItem, IAxiosResponse, IAddNewTodoListItemFormResponse } from '@todo/entities';
export interface ITodoListItemRepository {
    updateTodoListItem(updateData: ITodoListItem): Promise<IAxiosResponse>;
    deleteTodoListItem(listItemId: string, listId: string): Promise<IAxiosResponse>;
    addTodoListItem(todoListid: string, listItem: IAddNewTodoListItemFormResponse): Promise<IAxiosResponse>;
    getTodoListItemById(todoListItemId: string): Promise<IAxiosResponse>;
}
//# sourceMappingURL=todo-list-item-repository.d.ts.map