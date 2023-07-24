import { IAddNewTodoListItemFormResponse } from '@core/entities';
type FormValues = {
    title: string;
    description: string;
};
export declare const useAddNewTodoListItemForm: () => {
    onSubmit: (data: IAddNewTodoListItemFormResponse) => void;
    register: import("react-hook-form").UseFormRegister<FormValues>;
    handleSubmit: import("react-hook-form").UseFormHandleSubmit<FormValues, undefined>;
    errors: import("react-hook-form").FieldErrors<FormValues>;
};
export {};
