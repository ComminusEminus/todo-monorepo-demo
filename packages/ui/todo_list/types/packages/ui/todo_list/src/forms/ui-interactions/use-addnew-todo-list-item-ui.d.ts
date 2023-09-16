export declare const useAddNewTodoListItemUI: () => {
    addNewTodoListItemApiHandler: (data: import("@core/entities").IAddNewTodoListItemFormResponse, selectedTodoListId: string) => Promise<void>;
    addNewTodoListApiState: {
        returnValue: import("@core/entities").IAddNewListItemResponseDTO;
        errorMessage: any;
        loading: boolean;
    };
};
