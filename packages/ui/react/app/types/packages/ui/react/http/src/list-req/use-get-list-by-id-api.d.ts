import { Responses, ITodoListItem } from '@core/entities';
export interface IGetListByIdReturnValue {
    message?: Responses;
    error?: any;
    list?: ITodoListItem[];
}
export declare const useGetTodoListById: () => {
    getTodoListApiHandler: (selectedTodoListId: string) => Promise<void>;
    todoListApiState: {
        loading: boolean;
        returnValue: IGetListByIdReturnValue;
    };
};
