import { IGetListItemByIdResponseDTO } from '@core/entities';
export declare const useGetListItemById: () => {
    readonly getListItemByIdApiHandler: (listItemId: string) => Promise<void>;
    readonly getListItemApiState: {
        loading: boolean;
        returnValue: IGetListItemByIdResponseDTO;
    };
};
