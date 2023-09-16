import { IAddNewTodoListItemFormResponse, IAddNewListItemResponseDTO } from '@core/entities';
export declare const useAddNewTodoListItemApi: () => {
    addNewTodoListItemApiHandler: (data: IAddNewTodoListItemFormResponse, selectedTodoListId: string) => Promise<void>;
    addNewTodoListApiState: {
        returnValue: IAddNewListItemResponseDTO;
        errorMessage: any;
        loading: boolean;
    };
};
