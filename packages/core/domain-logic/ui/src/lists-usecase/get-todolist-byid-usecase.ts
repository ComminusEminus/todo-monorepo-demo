import {ITodoListRepository} from '@core/abstractions'
import {IHttpResponse} from '@core/entities'


export class GetTodoListByIdUseCase{
    constructor(private readonly repository: ITodoListRepository<IHttpResponse>){
        this.repository = repository;
    }
    
    public async execute(listId: string){

        if(!listId){
            throw new Error('Get todolists by id is missing listId')
        }

        const data = {listId}

        return await this.repository.getTodoListById(data);    
    }
}