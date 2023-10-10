import {
    INewUserRequestDTO,
    IUserLoginRequestDTO,
    ILogoutRequestDTO,
    IUserProfileUpdateRequestDTO
} from '@core/entities'

export const mapUserProfileRequest = (body: INewUserRequestDTO) => {
    const {firstName, lastName, userName, password} = body
    
    let error = false;

    if(!firstName || !lastName || !userName || !password){
        error = true;
    }
    return{
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        password: password,
        error: error
    }
}


export const mapUserLoginRequest= (body: IUserLoginRequestDTO) => {
    const {username, password} = body;
    let error = false;

    if(!username || !password){
        error = true
    }

    return{
        username : username,
        password : password,
        error: error
    }
}


export const mapUserProfileUpdateRequest = (body: IUserProfileUpdateRequestDTO) => {
    const {_id, firstName, lastName, userName, password} = body
    
    let error = false;

    if(!_id || !firstName || !lastName || !userName || !password){
        error = true;
    }
    return{
        _id: _id,
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        password: password,
        error: error
    }
}