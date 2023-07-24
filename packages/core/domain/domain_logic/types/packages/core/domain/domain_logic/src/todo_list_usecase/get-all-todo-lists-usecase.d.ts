import { ITodoListRepository } from '@core/abstractions';
export declare class GetAllTodoListsUseCase {
    private readonly repository;
    constructor(repository: ITodoListRepository);
    execute(userId: string): Promise<import("packages/core/domain/entities/types/packages/core/domain/entities/src").IAxiosResponse>;
}
