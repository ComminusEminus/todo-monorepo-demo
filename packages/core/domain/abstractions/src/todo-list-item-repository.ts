import {ITodoListItem, IAxiosResponse, IAddNewTodoListItemFormResponse} from '@core/entities'

export interface ITodoListItemRepository{
    updateTodoListItem(updateData: ITodoListItem) : Promise<IAxiosResponse>;
    deleteTodoListItem(listItemId: string, listId: string): Promise<IAxiosResponse>;
    addTodoListItem(todoListid: string, listItem: IAddNewTodoListItemFormResponse): Promise<IAxiosResponse>;
    getTodoListItemById(todoListItemId: string): Promise<IAxiosResponse>;
}