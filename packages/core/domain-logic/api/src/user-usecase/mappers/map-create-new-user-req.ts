import {INewUserRequestDTO} from '@core/entities'

export const mapCreateNewUserRequest = (body: INewUserRequestDTO) => {
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

