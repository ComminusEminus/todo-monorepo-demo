import { IAddNewListResponseDTO, IAddNewTodoListFormResponse } from '@core/entities';
export declare const useAddNewTodoListApi: () => {
    addNewTodoListApiHandler: (data: IAddNewTodoListFormResponse) => Promise<void>;
    addNewListApiState: {
        returnValue: IAddNewListResponseDTO;
        errorMessage: any;
        loading: boolean;
    };
};
