import { ITodoListItem } from '../todo-list-item/entities';
import { VisibilityState } from '../common/enum';
import { CompleteState } from '../todo-list-item/enum';
export declare enum LIST_ITEM_ACTIONS {
    UPDATE_COMPLETE_STATE = "UPDATE_COMPLETE_STATE",
    UPDATE_VISIBILITY_STATE = "UPDATE_VISIBILITY_STATE",
    ADD_LIST_ITEM_DATA = "ADD_LIST_ITEM_DATA",
    SET_COMPLETE_STATE = "SET_COMPLETE_STATE"
}
export interface IList_Item_DefaultState {
    listItemData: ITodoListItem | null;
    completeState: CompleteState | null;
    visibilityState: VisibilityState;
}
export interface IList_Item_DefaultState {
    listItemData: ITodoListItem | null;
    completeState: CompleteState | null;
    visibilityState: VisibilityState;
}
export interface IList_Item_Action {
    type: LIST_ITEM_ACTIONS;
    payload: any;
}
