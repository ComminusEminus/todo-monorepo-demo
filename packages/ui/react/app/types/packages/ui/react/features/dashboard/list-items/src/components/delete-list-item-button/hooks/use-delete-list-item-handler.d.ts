export declare const useDeleteListItemHandler: () => {
    state: import("@core/entities").IList_Item_DefaultState;
    deleteListItemHandler: () => void;
    deleteApiState: {
        loading: boolean;
        returnValue: import("@core/entities").IUpdateListItemResponseDTO;
    };
};
