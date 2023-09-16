import { HttpClientRepository } from './http-client-repo-imp';
import { IUserRepository } from '@core/abstractions';
import { INewUserRequestDTO, IUserLoginRequestDTO, IUserProfileUpdateRequestDTO, IHttpResponse } from '@core/entities';
export declare class UserRepository implements IUserRepository<IHttpResponse> {
    dataSource: HttpClientRepository;
    constructor(dataSource: HttpClientRepository);
    loginUser(data: IUserLoginRequestDTO): Promise<IHttpResponse>;
    logoutUser(): Promise<IHttpResponse>;
    editUserProfile(data: IUserProfileUpdateRequestDTO): Promise<IHttpResponse>;
    createUserProfile(data: INewUserRequestDTO): Promise<IHttpResponse>;
}
