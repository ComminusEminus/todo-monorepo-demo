import { ITodoListItemRepository } from '@core/abstractions';
import { ITodoListItem } from '@core/entities';
export declare class UpdateListItemUseCase {
    private readonly repository;
    constructor(repository: ITodoListItemRepository);
    execute(updateData: ITodoListItem): Promise<import("@core/entities").IAxiosResponse>;
}
//# sourceMappingURL=update-listitem-usecase.d.ts.map