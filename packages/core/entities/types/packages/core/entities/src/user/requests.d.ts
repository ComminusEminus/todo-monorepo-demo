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
export interface IUserProfileUpdateRequestDTO {
    _id: string;
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
}
