import {IUserRepository} from '@core/abstractions'
import {IUser} from '@core/entities'

import {IHttpResponse} from '@core/entities'

export class UpdateUserProfileUseCase{
    constructor(private readonly repository: IUserRepository<IHttpResponse>){
        this.repository = repository;
    }
    
    public async execute(user: IUser){
        const {_id, firstName, lastName, userName, password} = user
        
        if(!_id || !firstName || !lastName || !userName || !password){
            throw new Error('Update user profile is missing id firstname lastname username or password')
        }

        const data = {_id, firstName, lastName, userName, password}

        return await this.repository.editUserProfile(data)
    }
}