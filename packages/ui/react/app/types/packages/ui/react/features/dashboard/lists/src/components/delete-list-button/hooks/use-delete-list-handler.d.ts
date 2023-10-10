export declare const useDeleteListHandler: () => {
    readonly deleteListHandler: () => Promise<void>;
    readonly deleteListApiState: {
        loading: boolean;
        returnValue: import("@core/entities").IUpdateListItemResponseDTO;
    };
};
