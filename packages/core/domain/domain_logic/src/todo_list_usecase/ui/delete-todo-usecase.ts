import {ITodoListRepository} from '@core/abstractions'
import {IHttpResponse} from '@core/entities'


export class DeleteTodoListUseCase{
    constructor(private readonly repository: ITodoListRepository<IHttpResponse>){
        this.repository = repository;
    }

    public async execute(listId: string){
        if(!listId){
            throw new Error('Delete list is missing listId')
        }

        const data = {listId}

        return await this.repository.deleteTodoList(data);
    }
}