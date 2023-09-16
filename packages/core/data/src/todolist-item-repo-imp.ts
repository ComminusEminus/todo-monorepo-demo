import {ITodoListItemRepository} from '@core/abstractions'

import {
    IFindListItemByIdRequestDTO, 
    IUpdateListItemRequestDTO, 
    IDeleteListItemRequestDTO, 
    IAddNewTodoListItemRequestDTO,
    URLS,
    IHttpResponse
} from '@core/entities'

import {HttpClientRepository} from './http-client-repo-imp'


export class TodoListItemRepository implements ITodoListItemRepository<IHttpResponse>{
    dataSource: HttpClientRepository;

    constructor(dataSource: HttpClientRepository){
        this.dataSource = dataSource
    }

    async getTodoListItemById(data: IFindListItemByIdRequestDTO): Promise<IHttpResponse>{
        
        const params = {
            url: URLS.LIST_ITEM_GETBYID,
            data: {...data}
        }
        console.log('listitembyid repo')
        console.log(params)
        return await this.dataSource.post(params)

    }
    async updateTodoListItem(data: IUpdateListItemRequestDTO) : Promise<IHttpResponse> {
        const params = {
            url: URLS.LIST_ITEM_UPDATE,
            data: {...data}
        }
        return await this.dataSource.post(params)

    }
    async deleteTodoListItem(data: IDeleteListItemRequestDTO): Promise<IHttpResponse>{
        const params = {
            url:  URLS.LIST_ITEM_DELETE,
            data: {...data}
        }
        return await this.dataSource.post(params)

    }
    async addTodoListItem(data: IAddNewTodoListItemRequestDTO): Promise<IHttpResponse>{
        const params = {
            url: URLS.LIST_ITEM_ADD,
            data: {...data}
        }
        return await this.dataSource.post(params)

    }
}