import { ITodoList, Responses } from '@core/entities';
export interface IGetAllTodoListsApiReturnValue {
    message?: Responses;
    error?: any;
    lists?: ITodoList[];
}
export declare const useGetAllTodoListsApi: () => {
    getAllTodoListsApiHandler: () => Promise<void>;
    getAllTodoListsApiState: {
        returnValue: IGetAllTodoListsApiReturnValue;
        loading: boolean;
    };
};
