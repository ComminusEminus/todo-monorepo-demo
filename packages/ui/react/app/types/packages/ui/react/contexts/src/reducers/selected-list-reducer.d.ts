import { SELECTED_LIST_ACTIONS, ITodoListItem } from '@core/entities';
export interface ISelected_List_Action {
    type: SELECTED_LIST_ACTIONS;
    payload: any;
}
export interface ISelectedList_DefaultState {
    selectedList: ITodoListItem[] | null;
    filteredList: ITodoListItem[] | null;
    update: boolean;
}
export declare const SelectedList_DefaultState: ISelectedList_DefaultState;
export declare const selectedListReducer: (state: ISelectedList_DefaultState, action: ISelected_List_Action) => ISelectedList_DefaultState;
