export interface IUseGetTodoListByIdImplementation {
    selectedTodoListId?: string | null;
    updateTodoListItems?: boolean | null;
}
export declare const useGetTodoListByIdImplementation: ({ selectedTodoListId, updateTodoListItems }: IUseGetTodoListByIdImplementation) => {
    todoListApiState: {
        loading: boolean;
        error: boolean;
        returnValue: import("../api/use-get-todolist-by-id").IMappedListResponse;
    };
};
