import { ITodoListRepository } from '@core/abstractions';
export declare class DeleteTodoListUseCase {
    private readonly repository;
    constructor(repository: ITodoListRepository);
    execute(listId: string, userId: string): Promise<import("@core/entities").IAxiosResponse>;
}
