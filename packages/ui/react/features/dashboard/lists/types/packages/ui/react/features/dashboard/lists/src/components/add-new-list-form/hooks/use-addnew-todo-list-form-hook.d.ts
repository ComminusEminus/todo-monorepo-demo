/// <reference types="react" />
type FormValues = {
    title: string;
};
export declare const useAddNewTodoListFormHook: () => {
    readonly onSubmit: (e?: import("react").BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
    readonly register: import("react-hook-form").UseFormRegister<FormValues>;
    readonly handleSubmit: import("react-hook-form").UseFormHandleSubmit<FormValues, undefined>;
    readonly errors: import("react-hook-form").FieldErrors<FormValues>;
    readonly addNewListApiState: {
        returnValue: import("@core/entities").IAddNewListResponseDTO;
        loading: boolean;
    };
};
export {};
