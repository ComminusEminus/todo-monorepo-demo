import React, { createContext, useState, useContext } from 'react';

import {PAGE_DISPLAY_STATE} from '../interfaces/login-interfaces'


export interface ILogin_Context_State {
  pageDisplay: "LOGIN_PAGE" | "CREATE_NEW_PAGE";
  pageSwitchHandler: () => void;
}
export const Login_Default_Context_State: ILogin_Context_State = {
  pageDisplay: PAGE_DISPLAY_STATE.LOGIN_PAGE,
  pageSwitchHandler: () => { }
}

export const LoginContext = createContext<ILogin_Context_State>(Login_Default_Context_State);

export const useLoginContext = () => {
  const {pageDisplay, pageSwitchHandler} = useContext<ILogin_Context_State>(LoginContext)
  return {pageDisplay, pageSwitchHandler}
}

export interface ILoginProvider {
  children?: JSX.Element | JSX.Element[] | string;
}

export const LoginProvider = ({ children }: ILoginProvider) => {
  const {pageDisplay, pageSwitchHandler} = useSwitchPageHandler()


  return (
    <LoginContext.Provider value={{pageDisplay, pageSwitchHandler}}>
      {children}
    </LoginContext.Provider>
  );
}


export const useSwitchPageHandler = () => {
    const [pageDisplay, setPageDisplay] = useState<'LOGIN_PAGE' | 'CREATE_NEW_PAGE'>('LOGIN_PAGE');
    
    const pageSwitchHandler = () => {
        if(pageDisplay === 'LOGIN_PAGE'){
            setPageDisplay('CREATE_NEW_PAGE')
        }else{
            setPageDisplay('LOGIN_PAGE')
        }
    }

    return{
        pageDisplay,
        pageSwitchHandler
    }
}