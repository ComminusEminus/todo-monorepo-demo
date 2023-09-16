export interface IUseCreateNewUserUI {
    pageDisplayHandler: () => void;
}
export declare const useCreateNewUserUI: ({ pageDisplayHandler }: IUseCreateNewUserUI) => {
    requestState: {
        loading: boolean;
        error: boolean;
        returnValue: import("@core/entities").IUpdateListItemResponseDTO;
    };
    createNewUserApiHandler: (firstName: string, lastName: string, userName: string, password: string) => Promise<void>;
};
