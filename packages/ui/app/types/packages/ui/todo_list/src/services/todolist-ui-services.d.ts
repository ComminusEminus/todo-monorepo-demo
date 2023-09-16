import { Responses, ITodoListItem, IAddNewListItemResponseDTO, IHttpResponse } from '@core/entities';
export declare const mapToListDescription: (response: IHttpResponse) => {
    list: ITodoListItem[];
    message: Responses.OK | Responses.MISSING_DATA | Responses.DBERROR | Responses.NO_USER;
    error: any;
};
export declare const mapAddNewTodoListItemResponse: (response: IHttpResponse) => IAddNewListItemResponseDTO;
export declare const filterCompletedListItems: (todoListItems: ITodoListItem[]) => ITodoListItem[];
export declare const filterIncompleteListItems: (todoListItems: ITodoListItem[]) => ITodoListItem[];
