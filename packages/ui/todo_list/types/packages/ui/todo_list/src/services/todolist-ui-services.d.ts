import { Responses, ITodoListItem, IAddNewListItemResponseDTO, IHttpResponse } from '@core/entities';
export declare const mapToListDescription: (response: IHttpResponse) => {
    list: ITodoListItem[];
    message: Responses | undefined;
    error: any;
};
export declare const mapAddNewTodoListItemResponse: (response: IHttpResponse) => IAddNewListItemResponseDTO;
export declare const filterCompletedListItems: (todoListItems: ITodoListItem[]) => ITodoListItem[];
export declare const filterIncompleteListItems: (todoListItems: ITodoListItem[]) => ITodoListItem[];
