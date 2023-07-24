/// <reference types="react" />
type FormValues = {
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
};
export declare const useCreateNewUserForm: () => {
    onSubmit: (e?: import("react").BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
    register: import("react-hook-form").UseFormRegister<FormValues>;
    handleSubmit: import("react-hook-form").UseFormHandleSubmit<FormValues, undefined>;
    errors: import("react-hook-form").FieldErrors<FormValues>;
};
export {};
