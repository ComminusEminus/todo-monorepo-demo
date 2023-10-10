import React from 'react';
import { ITodoListItem, CompleteState, IUpdateListItemResponseDTO } from '@core/entities';
export declare const useCompleteTodoListItem: () => {
    updateTodoListItemCompleteStateApi: (listItemData: ITodoListItem, newCompleteState: CompleteState) => Promise<void>;
    completeApiState: {
        loading: boolean;
        returnValue: IUpdateListItemResponseDTO;
    };
    setReturnValue: React.Dispatch<React.SetStateAction<IUpdateListItemResponseDTO>>;
};
