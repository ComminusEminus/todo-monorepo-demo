import React from 'react';
import { AddNewTodoListItemFormInputs } from '@core/entities';
export declare const useAddNewTodoListItemFormHook: () => {
    onSubmit: (e?: React.BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
    register: import("react-hook-form").UseFormRegister<AddNewTodoListItemFormInputs>;
    handleSubmit: import("react-hook-form").UseFormHandleSubmit<AddNewTodoListItemFormInputs, undefined>;
    errors: import("react-hook-form").FieldErrors<AddNewTodoListItemFormInputs>;
    addNewTodoListApiState: {
        returnValue: import("@core/entities").IAddNewListItemResponseDTO;
        errorMessage: any;
        loading: boolean;
    };
};
