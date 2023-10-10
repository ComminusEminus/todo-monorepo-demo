import React from 'react';
type FormValues = {
    userName: string;
    password: string;
};
export declare const useLoginUserFormHook: () => {
    onSubmit: (e?: React.BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
    register: import("react-hook-form").UseFormRegister<FormValues>;
    requestState: {
        loading: boolean;
        returnValue: import("@core/entities").ILoginUserResponseDTO;
    };
};
export {};
