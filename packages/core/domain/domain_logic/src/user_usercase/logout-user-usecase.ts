import {IUserRepository} from '@core/abstractions'

export class LogoutUserUseCase{
    constructor(private readonly repository: IUserRepository){
        this.repository = repository;
    }
    
    
    public async execute(userName: string){
        return await this.repository.logoutUser(userName)
    }
}