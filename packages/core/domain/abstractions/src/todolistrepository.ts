import {
    IGetAllTodoListsRequestDTO,
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

