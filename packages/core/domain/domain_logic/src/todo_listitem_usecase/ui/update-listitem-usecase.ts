import {ITodoListItemRepository} from '@core/abstractions'
import {ITodoListItem, IHttpResponse} from '@core/entities'


export class UpdateListItemUseCase{
    constructor(private readonly repository: ITodoListItemRepository<IHttpResponse>){
        this.repository = repository;
    }
        
    public async execute(updateData: ITodoListItem){
        
        const {_id, title, description, complete} = updateData
        
        if(!_id || !title || !description || !complete){
            throw new Error('Arguments for update list item are incomplete')
        }

        const data = {_id, title, description, complete}

        return await this.repository.updateTodoListItem(data);
    }
}