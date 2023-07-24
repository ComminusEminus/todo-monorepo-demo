export interface IUser {
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    id: string;
}
export interface IMapUserProfile {
    data: IUser;
}
export interface IMappedUserProfile {
    id: string;
    userName: string;
    firstName: string;
    lastName: string;
}
