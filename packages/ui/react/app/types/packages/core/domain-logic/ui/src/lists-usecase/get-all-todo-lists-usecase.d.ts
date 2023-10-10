import { ITodoListRepository } from '@core/abstractions';
import { IHttpResponse } from '@core/entities';
export declare class GetAllTodoListsUseCase {
    private readonly repository;
    constructor(repository: ITodoListRepository<IHttpResponse>);
    execute(): Promise<IHttpResponse>;
}
