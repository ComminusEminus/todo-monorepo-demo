import { ITodoListItem, CompleteState } from '@core/entities';
export interface IUseCompleteTodoListItemsImplementation {
    listItemData?: ITodoListItem | null;
    completeState?: CompleteState | null;
}
export declare const useCompleteListItemUi: () => {
    completeApiState: {
        loading: boolean;
        returnValue: import("@core/entities").IUpdateListItemResponseDTO;
    };
    updateTodoListItemCompleteStateApi: (listItemData: ITodoListItem, newCompleteState: CompleteState) => Promise<void>;
};
