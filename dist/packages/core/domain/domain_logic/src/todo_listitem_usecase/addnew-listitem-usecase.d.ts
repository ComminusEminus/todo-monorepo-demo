import { ITodoListItemRepository } from '@core/abstractions';
import { IAddNewTodoListItemFormResponse } from '@core/entities';
export declare class AddNewListItemUseCase {
    private readonly repository;
    constructor(repository: ITodoListItemRepository);
    execute(todoListId: string, listItem: IAddNewTodoListItemFormResponse, userId: string): Promise<import("@core/entities").IAxiosResponse>;
}
//# sourceMappingURL=addnew-listitem-usecase.d.ts.map