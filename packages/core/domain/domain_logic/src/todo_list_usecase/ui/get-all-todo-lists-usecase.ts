import {ITodoListRepository} from '@core/abstractions'
import {IHttpResponse} from '@core/entities'


export class GetAllTodoListsUseCase{

    constructor(private readonly repository: ITodoListRepository<IHttpResponse>){
        this.repository = repository;
    }
    
    public async execute(){
        return await this.repository.getAllTodosLists()
    }
}
