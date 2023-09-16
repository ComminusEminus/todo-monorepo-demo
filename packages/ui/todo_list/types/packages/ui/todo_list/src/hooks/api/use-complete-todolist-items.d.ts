import React from 'react';
import { ITodoListItem } from '@core/entities';
import { CompleteState, IUpdateListItemResponseDTO } from '@core/entities';
export declare const useCompleteTodoListItem: () => {
    updateTodoListItemCompleteStateApi: (listItemData: ITodoListItem, newCompleteState: CompleteState) => Promise<void>;
    completeApiState: {
        loading: boolean;
        returnValue: IUpdateListItemResponseDTO;
        error: boolean;
    };
    setReturnValue: React.Dispatch<React.SetStateAction<IUpdateListItemResponseDTO>>;
};
