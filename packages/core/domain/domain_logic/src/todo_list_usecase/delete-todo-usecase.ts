import {ITodoListRepository} from '@core/abstractions'

export class DeleteTodoListUseCase{
    constructor(private readonly repository: ITodoListRepository){
        this.repository = repository;
    }
    
    public async execute(listId: string, userId: string){
        return await this.repository.deleteTodoList(listId, userId);
    }
}