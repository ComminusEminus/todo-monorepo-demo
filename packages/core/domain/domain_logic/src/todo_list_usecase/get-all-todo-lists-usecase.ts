import {ITodoListRepository} from '@core/abstractions'

export class GetAllTodoListsUseCase{

    constructor(private readonly repository: ITodoListRepository){
        this.repository = repository;
    }
    
    public async execute(userId: string){
        return await this.repository.getAllTodosLists(userId)
    }
}
