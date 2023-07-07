import { ITodoListRepository } from '@core/abstractions';
export declare class DeleteTodoListUseCase {
    private readonly repository;
    constructor(repository: ITodoListRepository);
    execute(listId: string, userId: string): Promise<import("@todo/entities").IAxiosResponse>;
}
//# sourceMappingURL=delete-todo-usecase.d.ts.map