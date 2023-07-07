import {ITodoListItemRepository} from '@core/abstractions'
import {ITodoListItem, IAddNewTodoListItemFormResponse} from '@core/entities'


export class AddNewListItemUseCase{
    constructor(private readonly repository: ITodoListItemRepository){
        this.repository = repository;
    }
    
    public async execute(todoListId: string, listItem: IAddNewTodoListItemFormResponse, userId: string){
            return await this.repository.addTodoListItem(todoListId, listItem)
    }
}