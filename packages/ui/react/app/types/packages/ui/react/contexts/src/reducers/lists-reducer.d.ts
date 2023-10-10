import { ITodoList, VisibilityState, LISTS_ACTIONS } from '@core/entities';
export interface ILists_Action {
    type: LISTS_ACTIONS;
    payload: any;
}
export interface ILists_DefaultState {
    listsData: ITodoList | null;
    visibilityState: VisibilityState;
}
export declare const Lists_DefaultState: ILists_DefaultState;
export declare const listsReducer: (state: ILists_DefaultState, action: ILists_Action) => ILists_DefaultState;
