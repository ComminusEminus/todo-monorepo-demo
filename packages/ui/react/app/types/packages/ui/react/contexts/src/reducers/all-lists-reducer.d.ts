import { ITodoList, ALL_LISTS_ACTIONS } from '@core/entities';
export interface IAll_Lists_Action {
    type: ALL_LISTS_ACTIONS;
    payload: any;
}
export interface IAll_Lists_DefaultState {
    allLists: ITodoList[] | null;
    update: boolean;
}
export declare const All_Lists_DefaultState: IAll_Lists_DefaultState;
export declare const allListsReducer: (state: IAll_Lists_DefaultState, action: IAll_Lists_Action) => IAll_Lists_DefaultState;
