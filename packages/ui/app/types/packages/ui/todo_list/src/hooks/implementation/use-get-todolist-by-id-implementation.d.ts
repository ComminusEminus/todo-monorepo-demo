export interface IUseGetTodoListByIdImplementation {
    selectedTodoListId?: string | null;
}
export declare const useGetTodoListByIdImplementation: ({ selectedTodoListId }: IUseGetTodoListByIdImplementation) => {
    todoListApiState: {
        loading: boolean;
        error: boolean;
        returnValue: import("../api/use-get-todolist-by-id").IMappedListResponse;
    };
};
