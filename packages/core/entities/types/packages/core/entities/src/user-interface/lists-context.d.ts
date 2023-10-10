import { ITodoList } from '../todo-list/entities';
import { VisibilityState } from '../common/enum';
export declare enum LISTS_ACTIONS {
    UPDATE_VISIBILITY_STATE = "UPDATE_VISIBILITY_STATE",
    ADD_LIST_DATA = "ADD_LIST_DATA"
}
export interface ILists_Action {
    type: LISTS_ACTIONS;
    payload: any;
}
export interface ILists_DefaultState {
    listsData: ITodoList | null;
    visibilityState: VisibilityState;
}
