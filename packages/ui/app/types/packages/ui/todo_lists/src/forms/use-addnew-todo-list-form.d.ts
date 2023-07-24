/// <reference types="react" />
type FormValues = {
    title: string;
};
export declare const useAddNewTodoListForm: () => {
    readonly onSubmit: (e?: import("react").BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
    readonly register: import("react-hook-form").UseFormRegister<FormValues>;
    readonly handleSubmit: import("react-hook-form").UseFormHandleSubmit<FormValues, undefined>;
    readonly errors: import("react-hook-form").FieldErrors<FormValues>;
};
export {};
