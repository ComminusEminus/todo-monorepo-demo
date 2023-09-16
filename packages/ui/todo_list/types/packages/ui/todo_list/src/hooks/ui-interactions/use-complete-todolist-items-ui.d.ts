import { ITodoListItem, IUpdateListItemResponseDTO } from '@core/entities';
export declare const useCompleteTodoListItemUI: () => {
    listItemData: ITodoListItem | null;
    completeHandler: () => void;
    completeApiState: {
        loading: boolean;
        returnValue: IUpdateListItemResponseDTO;
        error: boolean;
    };
};
