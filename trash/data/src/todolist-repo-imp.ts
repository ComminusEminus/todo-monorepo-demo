import {ITodoListRepository} from '@core/abstractions'
import {
    IAddNewListRequestDTO,  
    IDeleteListRequestDTO,  
    IFindListByIdRequestDTO,    
    IGetAllTodoListsRequestDTO, 
    URLS
} from '@core/entities'

import {IHttpClientRepository} from '@core/abstractions'
import {IHttpResponse, IHttpInput} from '@core/entities'

export class TodoListRepository implements ITodoListRepository<IHttpResponse>{
    dataSource: IHttpClientRepository<IHttpInput, IHttpResponse>;

    constructor(dataSource: IHttpClientRepository<IHttpInput, IHttpResponse>){
        this.dataSource = dataSource
    }
    async getAllTodosLists(): Promise<IHttpResponse> {
        const params = {
            url: URLS.LIST_ALL,
            data: {}
        }
        return await this.dataSource.get(params)
       
    }
    async addNewTodoList(data: IAddNewListRequestDTO): Promise<IHttpResponse> {
        const params = {
            url: URLS.LIST_ADD,
            data: {...data}
        }
        return await this.dataSource.post(params)
         
    }
    async deleteTodoList(data: IDeleteListRequestDTO): Promise<IHttpResponse>{
        const params = {
            url: URLS.LIST_DELETE,
            data: {...data}
        }

        return await this.dataSource.post(params)
        

    }
    async getTodoListById(data: IFindListByIdRequestDTO): Promise<IHttpResponse>{
        const params = {
            url: URLS.LIST_GETBYID,
            data: {...data}
        }
        return await this.dataSource.post(params)
        
    }
   
}