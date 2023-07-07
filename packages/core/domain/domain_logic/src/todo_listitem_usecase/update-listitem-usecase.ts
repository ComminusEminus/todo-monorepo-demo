import {ITodoListItemRepository} from '@core/abstractions'
import {ITodoListItem} from '@core/entities'

export class UpdateListItemUseCase{
    constructor(private readonly repository: ITodoListItemRepository){
        this.repository = repository;
    }
    
    public async execute(updateData:ITodoListItem){
        return await this.repository.updateTodoListItem(updateData);
    }
}