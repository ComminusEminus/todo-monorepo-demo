export declare const useDeleteListHandler: () => {
    readonly deleteListHandler: () => Promise<void>;
    readonly deleteListApiState: {
        loading: boolean;
        returnValue: import("packages/core/entities/types/packages/core/entities/src").IUpdateListItemResponseDTO;
    };
};
