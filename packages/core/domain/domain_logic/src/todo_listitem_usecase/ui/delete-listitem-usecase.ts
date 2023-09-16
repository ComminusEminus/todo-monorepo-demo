import {ITodoListItemRepository} from '@core/abstractions'

import {IHttpResponse} from '@core/entities'
export class DeleteListItemUseCase{
    constructor(private readonly repository: ITodoListItemRepository<IHttpResponse>){
        this.repository = repository;
    }
    
    public async execute(listItemId: string, listId: string){

        if(!listItemId || !listId){
            throw new Error('Delete list item arguments are incomplete')
        }

        const data = {listItemId, listId}

        return await this.repository.deleteTodoListItem(data);
    }
}