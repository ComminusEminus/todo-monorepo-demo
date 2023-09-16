import { IFindListItemByIdRequestDTO, IUpdateListItemRequestDTO, IDeleteListItemRequestDTO, IAddNewTodoListItemRequestDTO } from '@core/entities';
export interface ITodoListItemRepository<T> {
    updateTodoListItem(data: IUpdateListItemRequestDTO): Promise<T>;
    deleteTodoListItem(data: IDeleteListItemRequestDTO): Promise<T>;
    addTodoListItem(data: IAddNewTodoListItemRequestDTO): Promise<T>;
    getTodoListItemById(data: IFindListItemByIdRequestDTO): Promise<T>;
}
