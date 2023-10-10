export declare const useCompleteListItemHandler: () => {
    listItemData: import("@core/entities").ITodoListItem | null;
    completeHandler: () => void;
    completeApiState: {
        loading: boolean;
        returnValue: import("@core/entities").IUpdateListItemResponseDTO;
    };
};
