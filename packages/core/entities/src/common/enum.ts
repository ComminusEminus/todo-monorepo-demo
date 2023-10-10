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
    EMPTY = '',
    LOGGED_IN = 'LOGGED_IN',
    INVALID = 'INVALID'
}


