export declare const useDeleteListItemUi: () => {
    deleteApiState: {
        loading: boolean;
        returnValue: import("@core/entities").IUpdateListItemResponseDTO;
    };
    deleteListItemApiHandler: (listItem_id: string, list_id: string) => Promise<void>;
};
