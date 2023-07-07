import {ITodoListItemRepository} from '@core/abstractions'


export class GetTodoListItemByIdUseCase{
    constructor(private readonly repository: ITodoListItemRepository){
        this.repository = repository;
    }
    
    public async execute(todoListItemid: string){
        return await this.repository.getTodoListItemById(todoListItemid);
    }
}