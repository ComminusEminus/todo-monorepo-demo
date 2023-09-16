import { Responses, USER_STATUS } from './enum';
export interface IUser {
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    _id: string;
}
export interface IMapUserProfile {
    data: IUser;
}
export interface IMappedUserProfile {
    _id: string;
    userName: string;
    firstName: string;
    lastName: string;
}
export declare enum LOGINACTIONS {
    LOGIN_USER = "LOGIN_USER",
    LOGOUT_USER = "LOGOUT_USER"
}
export interface ILoginAction {
    type: LOGINACTIONS;
    payload: any;
}
export interface IUserLoginDefaultState {
    loggedIn: USER_STATUS;
}
export interface ICreateNewUserResponseDTO {
    message?: Responses;
    error?: any;
}
export interface ILoginUserResponseDTO {
    message?: Responses;
    error?: any;
}
export interface ILogOutUserResponseDTO {
    message?: Responses;
    error?: any;
}
export interface IUpdateUserProfileResponseDTO {
    message?: Responses;
    error?: any;
}
export interface INewUserRequestDTO {
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
}
export interface IUserLoginRequestDTO {
    username: string;
    password: string;
}
export interface ILogoutRequestDTO {
}
export interface IUserProfileUpdateRequestDTO {
    _id: string;
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
}
