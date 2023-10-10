export enum PAGE_DISPLAY_STATE {
    LOGIN_PAGE = 'LOGIN_PAGE',
    CREATE_NEW_PAGE = 'CREATE_NEW_PAGE'
  }  


export enum USER_STATUS{
    LOGGED_IN = 'LOGGED_IN',
    LOGGED_OUT = 'LOGGED_OUT'
}

export enum LOGINACTIONS{
  LOGIN_USER = 'LOGIN_USER',
  LOGOUT_USER = 'LOGOUT_USER'
}

export interface ILoginAction{
  type: LOGINACTIONS;
  payload: any;
}

export interface IUserLoginDefaultState{
  loggedIn: USER_STATUS;
}
