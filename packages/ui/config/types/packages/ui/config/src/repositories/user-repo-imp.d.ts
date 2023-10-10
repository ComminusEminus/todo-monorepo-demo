import { IUserRepository, IHttpClientRepository } from '@core/abstractions';
import { INewUserRequestDTO, IUserLoginRequestDTO, IUserProfileUpdateRequestDTO, IHttpResponse, IHttpInput } from '@core/entities';
export declare class UserRepository implements IUserRepository<IHttpResponse> {
    dataSource: IHttpClientRepository<IHttpInput, IHttpResponse>;
    constructor(dataSource: IHttpClientRepository<IHttpInput, IHttpResponse>);
    loginUser(data: IUserLoginRequestDTO): Promise<IHttpResponse>;
    logoutUser(): Promise<IHttpResponse>;
    editUserProfile(data: IUserProfileUpdateRequestDTO): Promise<IHttpResponse>;
    createUserProfile(data: INewUserRequestDTO): Promise<IHttpResponse>;
    verifyLogin(): Promise<IHttpResponse>;
}
