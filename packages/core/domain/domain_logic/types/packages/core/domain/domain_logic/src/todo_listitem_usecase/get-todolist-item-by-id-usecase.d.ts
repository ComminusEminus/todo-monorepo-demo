import { ITodoListItemRepository } from '@core/abstractions';
import { IHttpResponse } from '@core/entities';
export declare class GetTodoListItemByIdUseCase {
    private readonly repository;
    constructor(repository: ITodoListItemRepository<IHttpResponse>);
    execute(listItemId: string): Promise<IHttpResponse>;
}
