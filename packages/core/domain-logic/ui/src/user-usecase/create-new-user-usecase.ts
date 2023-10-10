import {IUserRepository} from '@core/abstractions'
import {IHttpResponse} from '@core/entities'

export class CreateNewUserUseCase{
    constructor(private readonly repository: IUserRepository<IHttpResponse>){
        this.repository = repository;
    }
    
    public async execute(firstName: string, lastName: string, userName: string, password: string){
        if(!firstName || !lastName || !userName || !password){
            throw new Error('Create new user is missing firstname, lastname, username or password')
        }

        const data = {firstName, lastName, userName, password}

        return await this.repository.createUserProfile(data)
    }
}