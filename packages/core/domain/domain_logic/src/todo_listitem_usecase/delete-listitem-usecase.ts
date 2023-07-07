import {ITodoListItemRepository} from '@core/abstractions'

//add list id 
export class DeleteListItemUseCase{
    constructor(private readonly repository: ITodoListItemRepository){
        this.repository = repository;
    }
    
    public async execute(listItemId: string, listId: string){
        return await this.repository.deleteTodoListItem(listItemId, listId);
    }
}