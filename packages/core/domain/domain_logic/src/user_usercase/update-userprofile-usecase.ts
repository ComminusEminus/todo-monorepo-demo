import {IUserRepository} from '@core/abstractions'
import {IUser} from '@core/entities'

export class UpdateUserProfileUseCase{
    constructor(private readonly repository: IUserRepository){
        this.repository = repository;
    }
    
    public async execute(userProfile: IUser){
        return await this.repository.editUserProfile(userProfile)
    }
}