import {ITodoListRepository} from '@core/abstractions'
import {IAddNewTodoListFormResponse, IHttpResponse} from '@core/entities'


export class AddNewTodoListUseCase{
    
    constructor(private readonly repository: ITodoListRepository<IHttpResponse>){
        this.repository = repository;
    }
    
    public async execute({title}: IAddNewTodoListFormResponse){
        
        if(!title){
            throw new Error('Add new todo list request is missing one or more form responses')
        }
        
        const data = {title}

        return await this.repository.addNewTodoList(data);

    }
}