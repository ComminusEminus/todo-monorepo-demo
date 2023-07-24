import { ITodoListRepository } from '@core/abstractions';
export declare class GetTodoListByIdUseCase {
    private readonly repository;
    constructor(repository: ITodoListRepository);
    execute(listId: string): Promise<import("@core/entities").IAxiosResponse>;
}
