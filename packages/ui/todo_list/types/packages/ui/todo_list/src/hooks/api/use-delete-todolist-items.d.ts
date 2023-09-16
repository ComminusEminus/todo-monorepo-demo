import { IUpdateListItemResponseDTO } from '@core/entities';
export declare const useDeleteTodoListItem: () => {
    deleteListItemApiHandler: (listItem_id: string, list_id: string) => Promise<void>;
    deleteApiState: {
        loading: boolean;
        error: boolean;
        returnValue: IUpdateListItemResponseDTO;
    };
};
