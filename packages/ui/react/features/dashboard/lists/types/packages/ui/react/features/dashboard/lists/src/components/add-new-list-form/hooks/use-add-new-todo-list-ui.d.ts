export declare const useAddNewTodoListUI: () => {
    addNewTodoListApiHandler: ({ title }: import("@core/entities").IAddNewTodoListFormResponse) => Promise<void>;
    addNewListApiState: {
        returnValue: import("@core/entities").IAddNewListResponseDTO;
        loading: boolean;
    };
};
