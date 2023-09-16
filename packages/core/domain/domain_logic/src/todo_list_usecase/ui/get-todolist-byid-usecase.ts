import {ITodoListRepository} from '@core/abstractions'
import {IHttpResponse} from '@core/entities'


export class GetTodoListByIdUseCase{
    constructor(private readonly repository: ITodoListRepository<IHttpResponse>){
        this.repository = repository;
    }
    
    public async execute(listId: string){
        console.log('get todo list by id use case listId: ' + listId)
        if(!listId){
            throw new Error('Get todolists by id is missing listId')
        }

        const data = {listId}
        console.log('get todo list by id use case data(below): ')
        console.log(data)
        return await this.repository.getTodoListById(data);    
    }
}