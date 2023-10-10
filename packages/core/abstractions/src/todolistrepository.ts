/**
 * Repository interface for client and api http actions perormed on each todo list 
 * @prop {func} getAllTodosLists
 * @prop {func} addNewTodoList
 * @prop {func} deleteTodoList
 * @prop {func} getTodoListById
 */


import {
    IAddNewListRequestDTO,
    IDeleteListRequestDTO,
    IFindListByIdRequestDTO
} from '@core/entities'

export interface ITodoListRepository<T>{
    getAllTodosLists(): Promise<T>;
    addNewTodoList(data: IAddNewListRequestDTO): Promise<T>;
    deleteTodoList(data: IDeleteListRequestDTO): Promise<T>;
    getTodoListById(data: IFindListByIdRequestDTO): Promise<T>;
}

