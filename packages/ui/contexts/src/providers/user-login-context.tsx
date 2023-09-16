import React, { createContext, useContext, useReducer, useState, Dispatch } from 'react';
import {USER_STATUS, LOGINACTIONS, ILoginAction} from '@core/entities'
/*

export const UserLoginDefaultState: IUserLoginDefaultState = {
    loggedIn: USER_STATUS.LOGGED_OUT
}

export const userLoginReducer = (state: IUserLoginDefaultState, action: ILoginAction): IUserLoginDefaultState => {
    
    switch(action.type){
        case LOGINACTIONS.LOGIN_USER :
            return{...state, loggedIn: USER_STATUS.LOGGED_IN}   
        case LOGINACTIONS.LOGOUT_USER :
            return{...state, loggedIn: USER_STATUS.LOGGED_OUT}  
        default: 
            return state;
    }
}
//------------

export interface IUserLoginContextState {
    state: IUserLoginDefaultState;
    dispatch: Dispatch<ILoginAction>;
}
export const UserLoginDefaultContextState: IUserLoginContextState = {
    state: UserLoginDefaultState,
    dispatch: (value: ILoginAction) => null
}
    
export interface IUserLoginProvider {
    children?: JSX.Element | JSX.Element[]
}

export const UserLoginContext = createContext<IUserLoginContextState>(UserLoginDefaultContextState);

export const useUserLoginContext = () => {
    const { state, dispatch} = useContext<IUserLoginContextState>(UserLoginContext)
    return { state, dispatch }
}*/

export interface IUserLoginDefaultState{
    loggedIn: USER_STATUS;
    setLoggedIn: (update: USER_STATUS) => void
}
export interface IUserLoginProvider {
    children?: JSX.Element | JSX.Element[]
}
export const UserLoginDefaultState: IUserLoginDefaultState = {
    loggedIn: USER_STATUS.LOGGED_OUT,
    setLoggedIn: () => {}
}
export const UserLoginContext = createContext<IUserLoginDefaultState>(UserLoginDefaultState);

export const useUserLoginContext = () => {
    const context = useContext<IUserLoginDefaultState>(UserLoginContext)
    return context
}


export const UserLoginProvider = ({children}: IUserLoginProvider) => {
    //const [state, dispatch] = useReducer(userLoginReducer, UserLoginDefaultState)
    const [loggedIn, setLoggedIn] = useState<USER_STATUS>(USER_STATUS.LOGGED_OUT)
    console.log(loggedIn)


    return (
        <UserLoginContext.Provider value={{loggedIn, setLoggedIn}}>
            {children}
        </UserLoginContext.Provider>
    );
}



