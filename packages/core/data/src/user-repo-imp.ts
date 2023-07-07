import {IHttpClient} from '@core/entities'
import {IUserRepository} from '@core/abstractions'
import {IUser, IAxiosResponse} from '@core/entities'

export class UserRepoImp implements IUserRepository{
    dataSource: IHttpClient;

    constructor(dataSource: IHttpClient){
        this.dataSource = dataSource
    }

    async loginUser(userName: string, password: string): Promise<IAxiosResponse>{
        const params = {
            url: 'user/login',
            data: {
                userName: userName,
                password: password
            }
        }
        return await this.dataSource.post(params)
        
    };
    async logoutUser(userName: string): Promise<IAxiosResponse>{
        const params = {
            url: 'user/logout',
            data: {
                userName: userName
            }
        } 
        return await this.dataSource.post(params)
        
    };
    async editUserProfile(userProfile: IUser): Promise<IAxiosResponse>{
        const params = {
            url: 'user/updateProfile',
            data: {
                userProfile: userProfile
            }
        }
        return await this.dataSource.put(params)
        
    };
    async createUserProfile(userName: string, password: string, firstName: string, lastName:string): Promise<IAxiosResponse>{
        const params = {
            url: 'user/createUser',
            data: {
                userName: userName,
                password: password,
                firstName: firstName,
                lastName: lastName
            }
        } 
        return await this.dataSource.post(params)
        
    };
}