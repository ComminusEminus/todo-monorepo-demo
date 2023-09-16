import {IUserRepository} from '@core/abstractions'

import {IHttpResponse} from '@core/entities'

export class LogoutUserUseCase{
    constructor(private readonly repository: IUserRepository<IHttpResponse>){
        this.repository = repository;
    }
    
    
    public async execute(){

        return await this.repository.logoutUser()
        
    }
}