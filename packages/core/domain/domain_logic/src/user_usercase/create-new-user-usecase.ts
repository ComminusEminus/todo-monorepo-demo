import {IUserRepository} from '@core/abstractions'

export class CreateNewUserUseCase{
    constructor(private readonly repository: IUserRepository){
        this.repository = repository;
    }
    
    public async execute(firstName: string, lastName: string, userName: string, password: string){
        return await this.repository.createUserProfile(firstName, lastName, userName, password)
    }
}