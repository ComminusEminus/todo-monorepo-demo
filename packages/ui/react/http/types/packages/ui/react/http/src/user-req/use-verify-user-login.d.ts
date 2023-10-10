import { Dispatch, SetStateAction } from 'react';
import { Responses } from '@core/entities';
export interface IUseVerifyLogin {
    verifyLoginHandler: () => {};
    requestState: any;
    setReturnValue: Dispatch<SetStateAction<{
        message: Responses | undefined;
        error: any;
    }>>;
}
export declare const useVerifyLogin: () => IUseVerifyLogin;
