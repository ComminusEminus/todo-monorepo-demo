import {IUser, IAxiosResponse} from '@core/entities'

export interface IUserRepository{
    loginUser(userName: string, password: string): Promise<IAxiosResponse>;
    editUserProfile(userProfile: IUser): Promise<IAxiosResponse>;
    createUserProfile(firstName: string, lastName: string, userName: string, password: string): Promise<IAxiosResponse>;
    logoutUser(userName: string): Promise<IAxiosResponse>;
}
