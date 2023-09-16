export enum CompleteState {
    COMPLETED = 'COMPLETED',
    INCOMPLETE = 'INCOMPLETE'
}

export enum Filter {
    ALL_LIST_ITEMS = 'ALL_LIST_ITEMS',
    COMPLETE_LIST_ITEMS = 'COMPLETE_LIST_ITEMS',
    INCOMPLETE_LIST_ITEMS = 'INCOMPLETE_LIST_ITEMS'
}

export enum FormType {
    NEW_TODOLIST = 'NEW_TODOLIST',
    NEW_TODOLIST_ITEM = 'NEW_TODOLIST_ITEM'
}

export enum VisibilityState {
    VISIBLE = 'VISIBLE',
    INVISIBLE = 'INVISIBLE'
}

export enum Responses {
    OK = 'ok',
    MISSING_DATA = 'Missing data from request',
    DBERROR = 'An error occured perfoming database action',
    NO_USER = 'User not found',
    EMPTY = ''
}

export enum LISTS_ACTIONS {
    UPDATE_VISIBILITY_STATE = "UPDATE_VISIBILITY_STATE",
    ADD_LIST_DATA = "ADD_LIST_DATA"
}

export enum LIST_ITEM_ACTIONS {
    UPDATE_COMPLETE_STATE = "UPDATE_COMPLETE_STATE",
    UPDATE_VISIBILITY_STATE = "UPDATE_VISIBILITY_STATE",
    ADD_LIST_ITEM_DATA = "ADD_LIST_ITEM_DATA",
    SET_COMPLETE_STATE = "SET_COMPLETE_STATE"
}

export enum UIACTIONS {
    SELECT_FORM_TYPE = "SELECT_FORM_TYPE",
    SELECT_TODO_LIST_ITEM_BY_ID = "SELECT_TODO_LIST_ITEM_BY_ID",
    SELECT_TODO_LIST_BY_ID = "SELECT_TODO_LIST_BY_ID",
    UPDATE_TODO_LIST = "UPDATE_TODO_LIST",
    UPDATE_TODO_LIST_ITEMS = "UPDATE_TODO_LIST_ITEMS",
    UPDATE_USER_STATUS = "UPDATE_USER_STATUS",
    LOGGED_IN = 'LOGGED_IN',
    LOGGED_OUT = 'LOGGED_OUT'
}

export enum URLS {
    LIST_ITEM_ADD = 'listItem/add',
    LIST_ITEM_DELETE = 'listItem/delete',
    LIST_ITEM_GETBYID = 'listItem/getById',
    LIST_ITEM_UPDATE = 'listItem/update',
    LIST_ADD = 'list/add',
    LIST_DELETE = 'list/delete',
    LIST_ALL = 'list/all',
    LIST_GETBYID = 'list/getById',
    USER_CREATE = 'user/createUser',
    USER_LOGIN = 'user/login',
    USER_LOGOUT = 'user/logout',
    USER_UPDATE = 'user/update',
}

export enum USER_STATUS{
    LOGGED_IN = 'LOGGED_IN',
    LOGGED_OUT = 'LOGGED_OUT'
}