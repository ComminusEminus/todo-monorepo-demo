import { ITodoListRepository } from '@core/abstractions';
export declare class GetTodoListByIdUseCase {
    private readonly repository;
    constructor(repository: ITodoListRepository);
    execute(listId: string): Promise<import("@todo/entities").IAxiosResponse>;
}
//# sourceMappingURL=get-todolist-byid-usecase.d.ts.map