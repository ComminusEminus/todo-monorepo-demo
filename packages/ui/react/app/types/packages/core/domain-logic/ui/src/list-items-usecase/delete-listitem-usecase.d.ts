import { ITodoListItemRepository } from '@core/abstractions';
import { IHttpResponse } from '@core/entities';
export declare class DeleteListItemUseCase {
    private readonly repository;
    constructor(repository: ITodoListItemRepository<IHttpResponse>);
    execute(listItemId: string, listId: string): Promise<IHttpResponse>;
}
