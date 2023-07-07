import { IHttpClient } from '@todo/entities';
import { ITodoListRepository } from '@todo/abstractions';
import { ITodoListItem, IAxiosResponse } from '@todo/entities';
export declare class TodoListRepoImp implements ITodoListRepository {
    dataSource: IHttpClient;
    constructor(dataSource: IHttpClient);
    getAllTodosLists(userId: string): Promise<IAxiosResponse>;
    addNewTodoList(listData: ITodoListItem, userId: string): Promise<IAxiosResponse>;
    deleteTodoList(listId: string, userId: string): Promise<IAxiosResponse>;
    getTodoListById(listId: string): Promise<IAxiosResponse>;
}
//# sourceMappingURL=todolist-repo-imp.d.ts.map