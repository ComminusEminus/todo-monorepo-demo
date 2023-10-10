import {IUserRepository} from '@core/abstractions'
import {
    INewUserRequestDTO,
    IUserLoginRequestDTO,
    ILogoutRequestDTO,
    IUserProfileUpdateRequestDTO,
    URLS,
    IHttpResponse,
    IHttpInput
} from '@core/entities'
import {IHttpClientRepository} from '@core/abstractions'

export class UserRepository implements IUserRepository<IHttpResponse>{
    dataSource: IHttpClientRepository<IHttpInput, IHttpResponse>;

    constructor(dataSource: IHttpClientRepository<IHttpInput, IHttpResponse>){
        this.dataSource = dataSource
    }

    async loginUser(data: IUserLoginRequestDTO): Promise<IHttpResponse>{
        const params = {
            url: URLS.USER_LOGIN,
            data: {...data}
        }
        return await this.dataSource.post(params)
        
    };
    async logoutUser(): Promise<IHttpResponse>{
        const params = {
            url: URLS.USER_LOGOUT,
            data: {}
        } 
        return await this.dataSource.post(params)
        
    };
    async editUserProfile(data: IUserProfileUpdateRequestDTO): Promise<IHttpResponse>{
        const params = {
            url: URLS.USER_UPDATE,
            data: {...data}
        }
        return await this.dataSource.post(params)
        
    };
    async createUserProfile(data: INewUserRequestDTO): Promise<IHttpResponse>{
        const params = {
            url: URLS.USER_CREATE,
            data: {...data}
        } 
        return await this.dataSource.post(params)
        
    };
}