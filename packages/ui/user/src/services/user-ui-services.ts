import {IUser, IHttpResponse, ILoginUserResponseDTO, IMapUserProfile, IMappedUserProfile} from '@core/entities'

export const mapUserProfile = (response: IHttpResponse): IMappedUserProfile => {
    const {data} = response
    const mappedResponse = data.map((user: IMappedUserProfile) => {
        const {_id, userName, firstName, lastName} = user
        return {
            id: _id,
            userName: userName,
            firstName: firstName,
            lastName: lastName,
        }
    })
    return mappedResponse[0];
}

export const mapLoginResponse = (response: IHttpResponse): ILoginUserResponseDTO => {
    const {data} = response
    const {user, token, message, error} = data;

    return{
        message: message,
        error: error,
    }
}


export const mapUserProfileForLoginUI = (input: IMappedUserProfile) => {
    
    if(!input){
        throw new Error('Map User Profile for Login UI is missing input data')
    }

    const {_id, userName, firstName, lastName} = input

    return{
        _id: _id, 
        userName: userName, 
        firstName: firstName, 
        lastName: lastName
    }
}