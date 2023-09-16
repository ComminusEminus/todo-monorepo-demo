import { IUpdateListItemResponseDTO } from '@core/entities';
export declare const useLogoutUser: () => {
    readonly logoutApiHandler: () => Promise<void>;
    readonly requestState: {
        loading: boolean;
        error: boolean;
        returnValue: IUpdateListItemResponseDTO;
    };
};
