import { UIACTIONS, FormType } from "./enum";
export interface IUIAction {
    type: UIACTIONS;
    payload: any;
}
export interface IUIDefaultState {
    formType?: FormType | null;
    selectedTodoListItemId?: string | null;
    selectedTodoListId?: string | null;
    update?: string | null;
    loggedIn?: string;
}
