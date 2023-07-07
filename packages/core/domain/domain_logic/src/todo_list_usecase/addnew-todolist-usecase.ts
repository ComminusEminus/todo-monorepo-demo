import {ITodoListRepository} from '@core/abstractions'
import {IAddNewTodoListFormResponse} from '@core/entities'

export class AddNewTodoListUseCase{
    
    constructor(private readonly repository: ITodoListRepository){
        this.repository = repository;
    }
    
    public async execute(todoList: IAddNewTodoListFormResponse, userId: string){
        return await this.repository.addNewTodoList(todoList, userId);
    }
}