export interface IUser{
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    _id: string;
    hash?: string;
    salt?: string;
}