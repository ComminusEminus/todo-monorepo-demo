import { ITodoListItemRepository } from '@core/abstractions';
export declare class DeleteListItemUseCase {
    private readonly repository;
    constructor(repository: ITodoListItemRepository);
    execute(listItemId: string, listId: string): Promise<import("@core/entities").IAxiosResponse>;
}
