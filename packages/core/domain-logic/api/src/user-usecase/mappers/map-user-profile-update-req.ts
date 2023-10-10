import {IUserProfileUpdateRequestDTO} from '@core/entities'


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