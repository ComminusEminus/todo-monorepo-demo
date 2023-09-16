import { ITodoList } from '@core/entities';
export declare const useGetAllTodoListsApi: () => {
    readonly getAllTodoListsApiHandler: () => Promise<void>;
    readonly getAllTodoListsApiState: {
        allTodoLists: ITodoList[] | [];
        loading: boolean;
        errorMessage: any;
    };
};
