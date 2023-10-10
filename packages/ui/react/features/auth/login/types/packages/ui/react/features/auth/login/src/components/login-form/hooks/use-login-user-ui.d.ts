export declare const useLoginUserUI: () => {
    loginApiHandler: (userProfile_userName: string, password: string) => Promise<void>;
    requestState: {
        loading: boolean;
        returnValue: import("@core/entities").ILoginUserResponseDTO;
    };
};
