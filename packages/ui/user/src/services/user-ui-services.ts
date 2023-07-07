import {IUser, IAxiosResponse} from '@core/entities'

export interface IMapUserProfile{
    data: IUser;
}

export interface IMappedUserProfile{
    id: string;
    userName: string;
    firstName: string;
    lastName: string;
}

export const mapUserProfile = (response: IAxiosResponse): IMappedUserProfile => {
    
    const mappedResponse = response.data.map((user: IMappedUserProfile) => {
        return {
            id: user.id,
            userName: user.userName,
            firstName: user.firstName,
            lastName: user.lastName,
        }
    })
    return mappedResponse[0];
}

