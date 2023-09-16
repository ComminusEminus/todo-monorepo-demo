import { ITodoList } from '@core/entities';
export interface IUserDeleteTodoListImplementation {
    listsData?: ITodoList | null;
    visibilityState?: string | null;
}
export declare const useDeleteTodoListImplementation: ({ listsData, visibilityState }: IUserDeleteTodoListImplementation) => {
    deleteListApiState: {
        loading: boolean;
        errorMessage: any;
        returnValue: import("@core/entities").IUpdateListItemResponseDTO;
    };
};
