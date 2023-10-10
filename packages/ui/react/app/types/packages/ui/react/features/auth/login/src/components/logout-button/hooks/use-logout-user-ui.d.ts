export declare const useLogoutUserUi: () => {
    requestState: {
        loading: boolean;
        returnValue: import("@core/entities").IUpdateListItemResponseDTO;
    };
    logoutApiHandler: () => Promise<void>;
};
