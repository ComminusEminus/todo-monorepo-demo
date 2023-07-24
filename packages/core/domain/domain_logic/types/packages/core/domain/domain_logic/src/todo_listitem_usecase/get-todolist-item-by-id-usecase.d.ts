import { ITodoListItemRepository } from '@core/abstractions';
export declare class GetTodoListItemByIdUseCase {
    private readonly repository;
    constructor(repository: ITodoListItemRepository);
    execute(todoListItemid: string): Promise<import("packages/core/domain/entities/types/packages/core/domain/entities/src").IAxiosResponse>;
}
