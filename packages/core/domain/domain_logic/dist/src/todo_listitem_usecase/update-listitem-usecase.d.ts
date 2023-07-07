import { ITodoListItemRepository } from '@todo/abstractions';
import { ITodoListItem } from '@todo/entities';
export declare class UpdateListItemUseCase {
    private readonly repository;
    constructor(repository: ITodoListItemRepository);
    execute(updateData: ITodoListItem): Promise<import("@todo/entities").IAxiosResponse>;
}
//# sourceMappingURL=update-listitem-usecase.d.ts.map