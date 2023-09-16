import { ITodoListItem } from '@core/entities';
export interface IMappedListResponse {
    message?: string;
    error?: string;
    list?: ITodoListItem[] | [];
}
export declare const useGetTodoListById: () => {
    getTodoListApiHandler: (selectedTodoListId: string) => Promise<void>;
    todoListApiState: {
        loading: boolean;
        error: boolean;
        returnValue: IMappedListResponse;
    };
};
