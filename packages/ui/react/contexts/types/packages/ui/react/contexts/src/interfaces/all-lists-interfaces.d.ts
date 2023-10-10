import { ITodoList } from '@core/entities';
export declare enum ALL_LISTS_ACTIONS {
    ADD_ALL_LISTS = "ADD_ALL_LISTS",
    UPDATE_ALL_LISTS = "UPDATE_ALL_LISTS"
}
export interface IAll_Lists_Action {
    type: ALL_LISTS_ACTIONS;
    payload: any;
}
export interface IAll_Lists_DefaultState {
    allLists: ITodoList[] | null;
    update: boolean;
}
