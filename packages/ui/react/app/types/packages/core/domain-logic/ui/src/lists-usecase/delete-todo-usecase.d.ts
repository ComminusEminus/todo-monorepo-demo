import { ITodoListRepository } from '@core/abstractions';
import { IHttpResponse } from '@core/entities';
export declare class DeleteTodoListUseCase {
    private readonly repository;
    constructor(repository: ITodoListRepository<IHttpResponse>);
    execute(listId: string): Promise<IHttpResponse>;
}
