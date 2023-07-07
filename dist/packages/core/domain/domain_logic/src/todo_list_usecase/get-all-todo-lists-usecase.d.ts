import { ITodoListRepository } from '@core/abstractions';
export declare class GetAllTodoListsUseCase {
    private readonly repository;
    constructor(repository: ITodoListRepository);
    execute(userId: string): Promise<import("@todo/entities").IAxiosResponse>;
}
//# sourceMappingURL=get-all-todo-lists-usecase.d.ts.map