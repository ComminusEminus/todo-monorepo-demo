export declare const useCreateNewUserUI: () => {
    requestState: {
        loading: boolean;
        error: boolean;
        returnValue: import("@core/entities").IUpdateListItemResponseDTO;
    };
    createNewUserApiHandler: (firstName: string, lastName: string, userName: string, password: string) => Promise<void>;
    update: string | null | undefined;
};
