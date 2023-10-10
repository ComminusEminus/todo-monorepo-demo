import { IAddNewTodoListItemFormResponse, IAddNewListItemResponseDTO } from '@core/entities';
export declare const useAddNewTodoListItemApi: () => {
    addNewTodoListItemApiHandler: (formResponse: IAddNewTodoListItemFormResponse, selectedTodoListId: string) => Promise<void>;
    addNewTodoListApiState: {
        returnValue: IAddNewListItemResponseDTO;
        loading: boolean;
    };
};
