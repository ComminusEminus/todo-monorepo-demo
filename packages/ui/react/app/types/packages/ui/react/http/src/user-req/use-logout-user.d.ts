import { IUpdateListItemResponseDTO } from '@core/entities';
export declare const useLogoutUser: () => {
    readonly logoutApiHandler: () => Promise<void>;
    readonly requestState: {
        loading: boolean;
        returnValue: IUpdateListItemResponseDTO;
    };
};
