import { ITodoListItem } from '../todo-list-item/entities';
export declare enum SELECTED_LIST_ACTIONS {
    UPDATE_SELECTED_LIST = "UPDATE_SELECTED_LIST",
    UPDATE_FILTERED_LIST = "UPDATE_FILTERED_LIST",
    UPDATE_LIST = "UPDATE_LIST"
}
export interface ISelected_List_Action {
    type: SELECTED_LIST_ACTIONS;
    payload: any;
}
export interface ISelectedList_DefaultState {
    selectedList: ITodoListItem[] | null;
    filteredList: ITodoListItem[] | null;
    update: boolean;
}
