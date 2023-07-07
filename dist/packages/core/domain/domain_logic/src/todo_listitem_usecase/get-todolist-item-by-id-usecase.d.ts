import { ITodoListItemRepository } from '@core/abstractions';
export declare class GetTodoListItemByIdUseCase {
    private readonly repository;
    constructor(repository: ITodoListItemRepository);
    execute(todoListItemid: string): Promise<import("@todo/entities").IAxiosResponse>;
}
//# sourceMappingURL=get-todolist-item-by-id-usecase.d.ts.map