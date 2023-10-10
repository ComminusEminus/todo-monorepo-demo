import {
    ITodoListRepository, 
    IHttpClientRepository
} from '@core/abstractions'

import {
    IAddNewListRequestDTO,  
    IDeleteListRequestDTO,  
    IFindListByIdRequestDTO,    

    IHttpResponse,
    IHttpInput
} from '@core/entities'


export class TodoListRepository implements ITodoListRepository<IHttpResponse>{
    dataSource: IHttpClientRepository<IHttpInput, IHttpResponse>;

    constructor(dataSource: IHttpClientRepository<IHttpInput, IHttpResponse>){
        this.dataSource = dataSource
    }
    async getAllTodosLists(): Promise<IHttpResponse> {
        const params = {
            url: 'list/getAll',
            data: {}
        }
        return await this.dataSource.post(params)
       
    }
    async addNewTodoList(data: IAddNewListRequestDTO): Promise<IHttpResponse> {
        const params = {
            url: 'list/create',
            data: {...data}
        }
        return await this.dataSource.post(params)
         
    }
    async deleteTodoList(data: IDeleteListRequestDTO): Promise<IHttpResponse>{
        const params = {
            url: 'list/delete',
            data: {...data}
        }

        return await this.dataSource.post(params)
        

    }
    async getTodoListById(data: IFindListByIdRequestDTO): Promise<IHttpResponse>{
        const params = {
            url: 'list/getById',
            data: {...data}
        }
        return await this.dataSource.post(params)
        
    }
   
}