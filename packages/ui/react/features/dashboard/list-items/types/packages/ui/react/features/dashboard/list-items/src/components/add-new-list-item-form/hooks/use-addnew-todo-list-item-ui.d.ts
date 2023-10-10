export declare const useAddNewTodoListItemUI: () => {
    addNewTodoListItemApiHandler: (formResponse: import("@core/entities").IAddNewTodoListItemFormResponse, selectedTodoListId: string) => Promise<void>;
    addNewTodoListApiState: {
        returnValue: import("@core/entities").IAddNewListItemResponseDTO;
        loading: boolean;
    };
};
