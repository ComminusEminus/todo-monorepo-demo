import React from 'react';
import { IUIAction } from '@core/entities';
export declare const useAddNewTodoListUI: (dispatch: React.Dispatch<IUIAction>) => {
    addNewTodoListApiHandler: (data: import("@core/entities").IAddNewTodoListFormResponse) => Promise<void>;
    addNewListApiState: {
        returnValue: import("@core/entities").IAddNewListResponseDTO;
        errorMessage: any;
        loading: boolean;
    };
};
