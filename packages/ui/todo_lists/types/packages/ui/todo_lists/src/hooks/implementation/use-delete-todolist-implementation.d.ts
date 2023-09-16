export interface IUserDeleteTodoListImplementation {
    listId?: string;
    visibilityState?: string | null;
}
export declare const useDeleteTodoListImplementation: ({ listId, visibilityState }: IUserDeleteTodoListImplementation) => {
    deleteListApiState: {
        loading: boolean;
        errorMessage: any;
        returnValue: import("@core/entities").IUpdateListItemResponseDTO;
    };
    deleteListApiHandler: (list_Id: string) => Promise<void>;
};
