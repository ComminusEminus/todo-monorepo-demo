import { IAddNewListResponseDTO, IAddNewTodoListFormResponse } from '@core/entities';
export declare const useAddNewTodoListApi: () => {
    addNewTodoListApiHandler: ({ title }: IAddNewTodoListFormResponse) => Promise<void>;
    addNewListApiState: {
        returnValue: IAddNewListResponseDTO;
        loading: boolean;
    };
};
