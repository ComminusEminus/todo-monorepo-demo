import { ITodoList, IHttpResponse, IAddNewListResponseDTO } from '@core/entities';
export declare const mapToListsDescription: (response: IHttpResponse) => ITodoList[] | [];
export declare const mapAddNewTodoListResponse: (response: IHttpResponse) => IAddNewListResponseDTO;
