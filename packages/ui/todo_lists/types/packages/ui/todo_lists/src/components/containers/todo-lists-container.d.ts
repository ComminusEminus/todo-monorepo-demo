import { ITodoList } from '@core/entities';
export interface ITodoListsContainer {
    allTodoLists: ITodoList[];
    loading: boolean;
    errorMessage: any;
}
export declare const TodoListsContainer: ({ allTodoLists, loading, errorMessage }: ITodoListsContainer) => import("react/jsx-runtime").JSX.Element;
