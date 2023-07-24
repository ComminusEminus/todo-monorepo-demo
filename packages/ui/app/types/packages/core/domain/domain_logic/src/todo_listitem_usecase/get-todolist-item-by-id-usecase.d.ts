import { ITodoListItemRepository } from '@core/abstractions';
export declare class GetTodoListItemByIdUseCase {
    private readonly repository;
    constructor(repository: ITodoListItemRepository);
    execute(todoListItemid: string): Promise<import("@core/entities").IAxiosResponse>;
}
