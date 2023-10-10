import {ITodoListItemRepository} from '@core/abstractions'

import {IHttpResponse} from '@core/entities'

export class GetTodoListItemByIdUseCase{
    constructor(private readonly repository: ITodoListItemRepository<IHttpResponse>){
        this.repository = repository;
    }
    
    public async execute(listItemId: string){
        
        if(!listItemId){
            throw new Error('Arguments for get todo list item by id are incomplete')
        }

        const data = {listItemId}

        return await this.repository.getTodoListItemById(data);
    }
}