import { VisibilityState, ITodoListItem } from '@core/entities';
export interface IUseDeleteTodoListItemsImplementation {
    listItemData?: ITodoListItem | null;
    selectedTodoListId?: string | null;
    visibilityState?: VisibilityState;
}
export declare const useDeleteTodoListItemsImplementation: ({ listItemData, selectedTodoListId, visibilityState }: IUseDeleteTodoListItemsImplementation) => {
    deleteApiState: {
        loading: boolean;
        error: boolean;
        returnValue: import("@core/entities").IUpdateListItemResponseDTO;
    };
};
