import { ITodoListItemRepository } from '@core/abstractions';
import { ITodoListItem, IHttpResponse } from '@core/entities';
export declare class UpdateListItemUseCase {
    private readonly repository;
    constructor(repository: ITodoListItemRepository<IHttpResponse>);
    execute(updateData: ITodoListItem): Promise<IHttpResponse>;
}
