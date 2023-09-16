export declare const useDeleteTodoListItemUI: () => {
    state: import("@core/entities").IList_Item_DefaultState;
    visibilityHandler: () => void;
    deleteApiState: {
        loading: boolean;
        error: boolean;
        returnValue: import("@core/entities").IUpdateListItemResponseDTO;
    };
};
