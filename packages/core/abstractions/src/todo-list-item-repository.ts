/**
 * Repository interface for client and api http actions perormed on individual todo list items  
 * @prop {func} updateTodoListItem 
 * @prop {func} deleteTodoListItem
 * @prop {func} addTodoListItem
 * @prop {func} getTodoListItemById
 */

import {
    IFindListItemByIdRequestDTO, 
    IUpdateListItemRequestDTO, 
    IDeleteListItemRequestDTO, 
    IAddNewTodoListItemRequestDTO
} from '@core/entities'

export interface ITodoListItemRepository<T>{    
    updateTodoListItem(data: IUpdateListItemRequestDTO) : Promise<T>;
    deleteTodoListItem(data: IDeleteListItemRequestDTO): Promise<T>;
    addTodoListItem(data: IAddNewTodoListItemRequestDTO): Promise<T>;
    getTodoListItemById(data: IFindListItemByIdRequestDTO): Promise<T>;
}

