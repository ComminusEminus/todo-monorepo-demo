export declare const useCreateNewUserUI: () => {
    requestState: {
        loading: boolean;
        returnValue: import("@core/entities").IUpdateListItemResponseDTO;
    };
    createNewUserApiHandler: (firstName: string, lastName: string, userName: string, password: string) => Promise<void>;
};
