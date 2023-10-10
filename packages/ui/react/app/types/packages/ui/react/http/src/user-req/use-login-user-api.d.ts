import { ILoginUserResponseDTO } from '@core/entities';
export declare const useLoginUserApi: () => {
    readonly loginApiHandler: (userProfile_userName: string, password: string) => Promise<void>;
    readonly requestState: {
        loading: boolean;
        returnValue: ILoginUserResponseDTO;
    };
};
