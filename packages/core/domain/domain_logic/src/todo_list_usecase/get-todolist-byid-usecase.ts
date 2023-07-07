import {ITodoListRepository} from '@core/abstractions'

export class GetTodoListByIdUseCase{
    constructor(private readonly repository: ITodoListRepository){
        this.repository = repository;
    }
    
    public async execute(listId: string){
        return await this.repository.getTodoListById(listId);    
    }
}