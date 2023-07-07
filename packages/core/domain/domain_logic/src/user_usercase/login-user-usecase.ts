import {IUserRepository} from '@core/abstractions'

export class LoginUserUseCase{
    constructor(private readonly repository: IUserRepository){
        this.repository = repository;
    }
    
    public async execute(userName: string, password: string){
        return await this.repository.loginUser(userName, password)
    }
}
