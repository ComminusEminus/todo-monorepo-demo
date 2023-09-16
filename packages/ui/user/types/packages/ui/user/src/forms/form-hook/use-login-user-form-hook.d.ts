/// <reference types="react" />
type FormValues = {
    userName: string;
    password: string;
};
export declare const useLoginUserFormHook: () => {
    onSubmit: (e?: import("react").BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
    register: import("react-hook-form").UseFormRegister<FormValues>;
    requestState: {
        loading: boolean;
        error: boolean;
        returnValue: import("packages/core/domain/entities/types/packages/core/domain/entities/src").ILoginUserResponseDTO;
    };
};
export {};
