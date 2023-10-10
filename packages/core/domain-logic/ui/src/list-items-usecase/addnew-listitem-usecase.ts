import {ITodoListItemRepository} from '@core/abstractions'
import {IHttpResponse, IAddNewTodoListItemFormResponse} from '@core/entities'


export class AddNewListItemUseCase{
    constructor(private readonly repository: ITodoListItemRepository<IHttpResponse>){
        this.repository = repository;
    }
    
    public async execute(listId: string, listItem: IAddNewTodoListItemFormResponse){
        const {title, description} = listItem    

        if(!listId || !title || !description){
            throw new Error('Add new list item arguments are missing listId, title or description')
        }
        
        const data = {listId, title, description}
        
        return await this.repository.addTodoListItem(data)
    }
}