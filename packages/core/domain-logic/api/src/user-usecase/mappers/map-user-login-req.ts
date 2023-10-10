import {IUserLoginRequestDTO} from '@core/entities'



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