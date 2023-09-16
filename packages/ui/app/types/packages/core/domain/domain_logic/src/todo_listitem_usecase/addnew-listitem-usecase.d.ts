import { ITodoListItemRepository } from '@core/abstractions';
import { IHttpResponse, IAddNewTodoListItemFormResponse } from '@core/entities';
export declare class AddNewListItemUseCase {
    private readonly repository;
    constructor(repository: ITodoListItemRepository<IHttpResponse>);
    execute(listId: string, listItem: IAddNewTodoListItemFormResponse): Promise<IHttpResponse>;
}
