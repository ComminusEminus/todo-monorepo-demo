import { FormType } from "../common/enum";
export interface IUIAction {
    type: UIACTIONS;
    payload: any;
}
export interface IUIDefaultState {
    formType?: FormType | null;
    selectedTodoListItemId?: string | null;
    selectedTodoListId?: string | null;
    updateTodoListItems?: boolean | null;
    updateTodoList?: boolean | null;
    loggedIn?: boolean | null;
}
export declare enum UIACTIONS {
    SELECT_FORM_TYPE = "SELECT_FORM_TYPE",
    SELECT_TODO_LIST_ITEM_BY_ID = "SELECT_TODO_LIST_ITEM_BY_ID",
    SELECT_TODO_LIST_BY_ID = "SELECT_TODO_LIST_BY_ID",
    UPDATE_TODO_LIST = "UPDATE_TODO_LIST",
    UPDATE_TODO_LIST_ITEMS = "UPDATE_TODO_LIST_ITEMS",
    UPDATE_USER_STATUS = "UPDATE_USER_STATUS",
    LOGGED_IN = "LOGGED_IN",
    LOGGED_OUT = "LOGGED_OUT"
}
