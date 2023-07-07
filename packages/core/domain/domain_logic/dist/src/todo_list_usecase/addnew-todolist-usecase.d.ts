import { ITodoListRepository } from '@todo/abstractions';
import { IAddNewTodoListFormResponse } from '@todo/entities';
export declare class AddNewTodoListUseCase {
    private readonly repository;
    constructor(repository: ITodoListRepository);
    execute(todoList: IAddNewTodoListFormResponse, userId: string): Promise<import("@todo/entities").IAxiosResponse>;
}
//# sourceMappingURL=addnew-todolist-usecase.d.ts.map