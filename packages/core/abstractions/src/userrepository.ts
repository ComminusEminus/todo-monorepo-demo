/**
 * Repository interface for client and api http actions perormed on user profile and authorization/authentication 
 * @prop {func} loginUser
 * @prop {func} editUserProfile
 * @prop {func} createUserProfile
 * @prop {func} logoutUser
 */


import {
    INewUserRequestDTO,
    IUserLoginRequestDTO,
    IUserProfileUpdateRequestDTO
} from '@core/entities'

export interface IUserRepository<T>{
    loginUser(data: IUserLoginRequestDTO): Promise<T>;
    editUserProfile(data: IUserProfileUpdateRequestDTO): Promise<T>;
    verifyLogin(): Promise<T>;
    createUserProfile(data: INewUserRequestDTO): Promise<T>;
    logoutUser(): Promise<T>;
}
