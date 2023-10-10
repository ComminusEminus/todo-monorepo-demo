import React from 'react';
import * as yup from "yup";
export type FormValues = {
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
};
export interface ICreateUserResponse {
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
}
export declare const schema: yup.ObjectSchema<{
    userName: string;
    password: string;
    lastName: string;
    firstName: string;
}, yup.AnyObject, {
    userName: undefined;
    password: undefined;
    lastName: undefined;
    firstName: undefined;
}, "">;
export declare const useCreateNewUserFormHook: () => {
    onSubmit: (e?: React.BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
    register: import("react-hook-form").UseFormRegister<FormValues>;
    errors: import("react-hook-form").FieldErrors<FormValues>;
    requestState: {
        loading: boolean;
        returnValue: import("@core/entities").IUpdateListItemResponseDTO;
    };
};
