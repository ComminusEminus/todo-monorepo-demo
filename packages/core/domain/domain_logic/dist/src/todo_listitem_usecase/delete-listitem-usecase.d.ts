import { ITodoListItemRepository } from '@todo/abstractions';
export declare class DeleteListItemUseCase {
    private readonly repository;
    constructor(repository: ITodoListItemRepository);
    execute(listItemId: string, listId: string): Promise<import("@todo/entities").IAxiosResponse>;
}
//# sourceMappingURL=delete-listitem-usecase.d.ts.map