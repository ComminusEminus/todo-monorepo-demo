import React from 'react';
import { IUIAction } from '@core/entities';
export declare const useAddNewTodoListItemUI: (dispatch: React.Dispatch<IUIAction>) => {
    addNewTodoListItemApiHandler: (data: import("@core/entities").IAddNewTodoListItemFormResponse, selectedTodoListId: string) => Promise<void>;
    addNewTodoListApiState: {
        returnValue: import("@core/entities").IAddNewListItemResponseDTO;
        errorMessage: any;
        loading: boolean;
    };
};
