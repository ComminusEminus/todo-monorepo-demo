import {IUserRepository, IHttpClientRepository} from '@core/abstractions'
import {
    INewUserRequestDTO,
    IUserLoginRequestDTO,
    IUserProfileUpdateRequestDTO,
    IHttpResponse,
    IHttpInput
} from '@core/entities'


export class UserRepository implements IUserRepository<IHttpResponse>{
    dataSource: IHttpClientRepository<IHttpInput, IHttpResponse>;

    constructor(dataSource: IHttpClientRepository<IHttpInput, IHttpResponse>){
        this.dataSource = dataSource
    }

    async loginUser(data: IUserLoginRequestDTO): Promise<IHttpResponse>{
        const params = {
            url: 'user/login',
            data: {...data}
        }
        return await this.dataSource.post(params)
        
    };
    async logoutUser(): Promise<IHttpResponse>{
        const params = {
            url: 'user/logout',
            data: {}
        } 
        return await this.dataSource.post(params)
        
    };
    async editUserProfile(data: IUserProfileUpdateRequestDTO): Promise<IHttpResponse>{
        const params = {
            url: 'user/update',
            data: {...data}
        }
        return await this.dataSource.post(params)
        
    };
    async createUserProfile(data: INewUserRequestDTO): Promise<IHttpResponse>{
        const params = {
            url: 'user/create',
            data: {...data}
        } 
        return await this.dataSource.post(params)
        
    };

    async verifyLogin(): Promise<IHttpResponse>{

        const params = {
            url: 'user/verify',
            data: {}
        }
        return await this.dataSource.post(params)
    }
}