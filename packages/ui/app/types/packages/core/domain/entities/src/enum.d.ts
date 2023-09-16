export declare enum CompleteState {
    COMPLETED = "COMPLETED",
    INCOMPLETE = "INCOMPLETE"
}
export declare enum Filter {
    ALL_LIST_ITEMS = "ALL_LIST_ITEMS",
    COMPLETE_LIST_ITEMS = "COMPLETE_LIST_ITEMS",
    INCOMPLETE_LIST_ITEMS = "INCOMPLETE_LIST_ITEMS"
}
export declare enum FormType {
    NEW_TODOLIST = "NEW_TODOLIST",
    NEW_TODOLIST_ITEM = "NEW_TODOLIST_ITEM"
}
export declare enum VisibilityState {
    VISIBLE = "VISIBLE",
    INVISIBLE = "INVISIBLE"
}
export declare enum Responses {
    OK = "ok",
    MISSING_DATA = "Missing data from request",
    DBERROR = "An error occured perfoming database action",
    NO_USER = "User not found",
    EMPTY = ""
}
export declare enum LISTS_ACTIONS {
    UPDATE_VISIBILITY_STATE = "UPDATE_VISIBILITY_STATE",
    ADD_LIST_DATA = "ADD_LIST_DATA"
}
export declare enum LIST_ITEM_ACTIONS {
    UPDATE_COMPLETE_STATE = "UPDATE_COMPLETE_STATE",
    UPDATE_VISIBILITY_STATE = "UPDATE_VISIBILITY_STATE",
    ADD_LIST_ITEM_DATA = "ADD_LIST_ITEM_DATA"
}
export declare enum UIACTIONS {
    SELECT_FORM_TYPE = "SELECT_FORM_TYPE",
    SELECT_TODO_LIST_ITEM_BY_ID = "SELECT_TODO_LIST_ITEM_BY_ID",
    SELECT_TODO_LIST_BY_ID = "SELECT_TODO_LIST_BY_ID",
    UPDATE_OBSERVERS = "UPDATE_OBSERVERS",
    UPDATE_USER_STATUS = "UPDATE_USER_STATUS",
    LOGGED_IN = "LOGGED_IN",
    LOGGED_OUT = "LOGGED_OUT"
}
export declare enum URLS {
    LIST_ITEM_ADD = "listItem/add",
    LIST_ITEM_DELETE = "listItem/delete",
    LIST_ITEM_GETBYID = "listItem/getById",
    LIST_ITEM_UPDATE = "listItem/update",
    LIST_ADD = "list/add",
    LIST_DELETE = "list/delete",
    LIST_ALL = "list/all",
    LIST_GETBYID = "list/getById",
    USER_CREATE = "user/createUser",
    USER_LOGIN = "user/login",
    USER_LOGOUT = "user/logout",
    USER_UPDATE = "user/update"
}
export declare enum USER_STATUS {
    LOGGED_IN = "LOGGED_IN",
    LOGGED_OUT = "LOGGED_OUT"
}
