export declare const useLogoutUserUpdateObserver: () => {
    requestState: {
        loading: boolean;
        error: boolean;
        returnValue: import("@core/entities").IUpdateListItemResponseDTO;
    };
    logoutApiHandler: () => Promise<void>;
    update: string | null | undefined;
};
