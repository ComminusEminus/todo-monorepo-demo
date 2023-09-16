import { ITodoListItem, CompleteState } from '@core/entities';
export interface IUseCompleteTodoListItemsImplementation {
    listItemData?: ITodoListItem | null;
    completeState?: CompleteState | null;
}
export declare const useCompleteTodoListItemsImplementation: () => {
    completeApiState: {
        loading: boolean;
        returnValue: import("@core/entities").IUpdateListItemResponseDTO;
        error: boolean;
    };
    updateTodoListItemCompleteStateApi: (listItemData: ITodoListItem, newCompleteState: CompleteState) => Promise<void>;
};
