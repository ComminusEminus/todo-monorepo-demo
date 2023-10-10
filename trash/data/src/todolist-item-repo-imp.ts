import {ITodoListItemRepository} from '@core/abstractions'

import {
    IFindListItemByIdRequestDTO, 
    IUpdateListItemRequestDTO, 
    IDeleteListItemRequestDTO, 
    IAddNewTodoListItemRequestDTO,
    URLS,
    IHttpResponse,
    IHttpInput
} from '@core/entities'

import {IHttpClientRepository} from '@core/abstractions'



export class TodoListItemRepository implements ITodoListItemRepository<IHttpResponse>{
    dataSource: IHttpClientRepository<IHttpInput, IHttpResponse>;

    constructor(dataSource: IHttpClientRepository<IHttpInput, IHttpResponse>){
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