import { ITodoListItem } from '@core/entities';
import { ListItemStatus } from '@core/entities';
export declare const useCompleteTodoListItem: () => {
    apiHandler: (originalState: ITodoListItem, newCompleteState: ListItemStatus) => Promise<void>;
};
