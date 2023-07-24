import {IAxiosResponse, IAddNewTodoListFormResponse} from '@core/entities'

export interface ITodoListRepository{
    getAllTodosLists(userId: string): Promise<IAxiosResponse>;
    addNewTodoList(listData: IAddNewTodoListFormResponse, userId: string): Promise<IAxiosResponse>;
    deleteTodoList(listId: string, userId: string): Promise<IAxiosResponse>;
    getTodoListById(listId: string): Promise<IAxiosResponse>;
}

