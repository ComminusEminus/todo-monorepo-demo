import { UIACTIONS, FormType } from "./enum";
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
