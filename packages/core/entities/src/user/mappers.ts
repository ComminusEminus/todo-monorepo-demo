import {IUser} from './entities'

export interface IMappedUserProfile{
    _id: string;
    userName: string;
    firstName: string;
    lastName: string;
}

export interface IMapUserProfile{
    data: IUser;
}