import React from 'react';
import { USER_STATUS } from '@core/entities';
export interface IUserLoginDefaultState {
    loggedIn: USER_STATUS;
    setLoggedIn: (update: USER_STATUS) => void;
}
export interface IUserLoginProvider {
    children?: JSX.Element | JSX.Element[];
}
export declare const UserLoginDefaultState: IUserLoginDefaultState;
export declare const UserLoginContext: React.Context<IUserLoginDefaultState>;
export declare const useUserLoginContext: () => IUserLoginDefaultState;
export declare const UserLoginProvider: ({ children }: IUserLoginProvider) => import("react/jsx-runtime").JSX.Element;
