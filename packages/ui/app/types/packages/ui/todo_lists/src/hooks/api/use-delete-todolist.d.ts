import { IUpdateListItemResponseDTO } from '@core/entities';
export declare const useDeleteTodoListApi: () => {
    readonly deleteListApiHandler: (list_Id: string) => Promise<void>;
    readonly deleteListApiState: {
        loading: boolean;
        errorMessage: any;
        returnValue: IUpdateListItemResponseDTO;
    };
};
