export interface IUserDeleteTodoListImplementation {
    dispatch: any;
}
export declare const useDeleteListUi: ({ dispatch }: IUserDeleteTodoListImplementation) => {
    deleteListApiState: {
        loading: boolean;
        returnValue: import("@core/entities").IUpdateListItemResponseDTO;
    };
    deleteListApiHandler: (list_Id: string) => Promise<void>;
};
