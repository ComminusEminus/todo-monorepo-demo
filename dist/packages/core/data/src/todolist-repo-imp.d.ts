import { IHttpClient } from '@core/entities';
import { ITodoListRepository } from '@core/abstractions';
import { ITodoListItem, IAxiosResponse } from '@core/entities';
export declare class TodoListRepoImp implements ITodoListRepository {
    dataSource: IHttpClient;
    constructor(dataSource: IHttpClient);
    getAllTodosLists(userId: string): Promise<IAxiosResponse>;
    addNewTodoList(listData: ITodoListItem, userId: string): Promise<IAxiosResponse>;
    deleteTodoList(listId: string, userId: string): Promise<IAxiosResponse>;
    getTodoListById(listId: string): Promise<IAxiosResponse>;
}
//# sourceMappingURL=todolist-repo-imp.d.ts.map