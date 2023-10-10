import React from 'react';
export interface ILogin_Context_State {
    pageDisplay: "LOGIN_PAGE" | "CREATE_NEW_PAGE";
    pageSwitchHandler: () => void;
}
export declare const Login_Default_Context_State: ILogin_Context_State;
export declare const LoginContext: React.Context<ILogin_Context_State>;
export declare const useLoginContext: () => {
    pageDisplay: "LOGIN_PAGE" | "CREATE_NEW_PAGE";
    pageSwitchHandler: () => void;
};
export interface ILoginProvider {
    children?: JSX.Element | JSX.Element[] | string;
}
export declare const LoginProvider: ({ children }: ILoginProvider) => import("react/jsx-runtime").JSX.Element;
export declare const useSwitchPageHandler: () => {
    pageDisplay: "LOGIN_PAGE" | "CREATE_NEW_PAGE";
    pageSwitchHandler: () => void;
};
