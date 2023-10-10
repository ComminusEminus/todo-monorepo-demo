export declare const useCreateNewUserUI: () => {
    requestState: {
        loading: boolean;
        returnValue: import("packages/core/entities/types/packages/core/entities/src").IUpdateListItemResponseDTO;
    };
    createNewUserApiHandler: (firstName: string, lastName: string, userName: string, password: string) => Promise<void>;
};
