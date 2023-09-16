import { INewUserRequestDTO, IUserLoginRequestDTO, IUserProfileUpdateRequestDTO } from '@core/entities';
export interface IUserRepository<T> {
    loginUser(data: IUserLoginRequestDTO): Promise<T>;
    editUserProfile(data: IUserProfileUpdateRequestDTO): Promise<T>;
    createUserProfile(data: INewUserRequestDTO): Promise<T>;
    logoutUser(): Promise<T>;
}
