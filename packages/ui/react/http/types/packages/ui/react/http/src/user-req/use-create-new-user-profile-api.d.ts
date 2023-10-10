import { IUpdateListItemResponseDTO } from '@core/entities';
export declare const useCreateNewUserProfileApi: () => {
    readonly createNewUserApiHandler: (firstName: string, lastName: string, userName: string, password: string) => Promise<void>;
    readonly requestState: {
        loading: boolean;
        returnValue: IUpdateListItemResponseDTO;
    };
};
