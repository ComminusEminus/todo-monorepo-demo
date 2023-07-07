import { ITodoListRepository } from '@core/abstractions';
import { IAddNewTodoListFormResponse } from '@core/entities';
export declare class AddNewTodoListUseCase {
    private readonly repository;
    constructor(repository: ITodoListRepository);
    execute(todoList: IAddNewTodoListFormResponse, userId: string): Promise<import("@core/entities").IAxiosResponse>;
}
//# sourceMappingURL=addnew-todolist-usecase.d.ts.map