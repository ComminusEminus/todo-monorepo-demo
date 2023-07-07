import { ITodoListItemRepository } from '@todo/abstractions';
import { IAddNewTodoListItemFormResponse } from '@todo/entities';
export declare class AddNewListItemUseCase {
    private readonly repository;
    constructor(repository: ITodoListItemRepository);
    execute(todoListId: string, listItem: IAddNewTodoListItemFormResponse, userId: string): Promise<import("@todo/entities").IAxiosResponse>;
}
//# sourceMappingURL=addnew-listitem-usecase.d.ts.map