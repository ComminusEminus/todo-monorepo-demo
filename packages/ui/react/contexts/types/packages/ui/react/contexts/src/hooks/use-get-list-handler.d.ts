export interface IUseGetTodoListByIdImplementation {
    selectedTodoListId?: string | null;
}
export declare const useGetListHandler: ({ selectedTodoListId }: IUseGetTodoListByIdImplementation) => {
    todoListApiState: {
        loading: boolean;
        returnValue: import("@reactui/http").IGetListByIdReturnValue;
    };
};
