import {IUserRepository} from '@core/abstractions'
import {IHttpResponse} from '@core/entities'

export class LoginUserUseCase{
    constructor(private readonly repository: IUserRepository<IHttpResponse>){
        this.repository = repository;
    }
    
    public async execute(username: string, password: string){
        if(!username || !password){
            throw new Error('Login is missing username or password')
        }
        
        const data = {username, password}

        return await this.repository.loginUser(data)
    }
}
