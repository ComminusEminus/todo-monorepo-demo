/// <reference types="react" />
type FormValues = {
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
};
export interface IUseCreateNewUserFormHook {
    pageDisplayHandler: () => void;
}
export declare const useCreateNewUserFormHook: ({ pageDisplayHandler }: IUseCreateNewUserFormHook) => {
    onSubmit: (e?: import("react").BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
    register: import("react-hook-form").UseFormRegister<FormValues>;
    errors: import("react-hook-form").FieldErrors<FormValues>;
    requestState: {
        loading: boolean;
        error: boolean;
        returnValue: import("@core/entities").IUpdateListItemResponseDTO;
    };
};
export {};
