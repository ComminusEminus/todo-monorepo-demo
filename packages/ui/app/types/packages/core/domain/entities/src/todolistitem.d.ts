import { CompleteState, Responses, VisibilityState, LIST_ITEM_ACTIONS } from './enum';
export interface IList_Item_Action {
    type: LIST_ITEM_ACTIONS;
    payload: any;
}
export interface ITodoListItem {
    _id: string;
    title: string;
    description: string;
    complete: CompleteState;
}
export interface IAddNewTodoListItemFormResponse {
    title: string;
    description: string;
}
export interface ITodoListItemDescription {
    _id: string;
    title: string;
    complete: CompleteState;
}
export interface IList_Item_DefaultState {
    listItemData: ITodoListItem | null;
    completeState: CompleteState | null;
    visibilityState: VisibilityState;
}
export interface IAddNewTodoListItemRequestDTO {
    title: string;
    description: string;
    listId: string;
}
export interface IDeleteListItemRequestDTO {
    listId: string;
    listItemId: string;
}
export interface IFindListItemByIdRequestDTO {
    listItemId: string;
}
export interface IUpdateListItemRequestDTO {
    _id: string;
    title: string;
    description: string;
    complete: string;
}
export interface IAddNewListItemResponseDTO {
    message?: Responses;
    error?: any;
}
export interface IDeleteListItemResponseDTO {
    message?: Responses;
    error?: any;
}
export interface IGetListItemByIdResponseDTO {
    listItem?: ITodoListItem | null;
    message?: Responses;
    error?: any;
}
export interface IUpdateListItemResponseDTO {
    message?: Responses;
    error?: any;
}
export type AddNewTodoListItemFormInputs = {
    title: string;
    description: string;
};
