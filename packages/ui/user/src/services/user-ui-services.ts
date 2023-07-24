import {IUser, IAxiosResponse, IMapUserProfile, IMappedUserProfile} from '@core/entities'

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

