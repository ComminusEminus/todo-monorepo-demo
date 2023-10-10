import {ITodoListItemRepository, IHttpClientRepository} from '@core/abstractions'

import {
    IFindListItemByIdRequestDTO, 
    IUpdateListItemRequestDTO, 
    IDeleteListItemRequestDTO, 
    IAddNewTodoListItemRequestDTO,

    IHttpResponse,
    IHttpInput
} from '@core/entities'





export class TodoListItemRepository implements ITodoListItemRepository<IHttpResponse>{
    dataSource: IHttpClientRepository<IHttpInput, IHttpResponse>;

    constructor(dataSource: IHttpClientRepository<IHttpInput, IHttpResponse>){
        this.dataSource = dataSource
    }

    async getTodoListItemById(data: IFindListItemByIdRequestDTO): Promise<IHttpResponse>{
        
        const params = {
            url: 'listItem/getById',
            data: {...data}
        }

        return await this.dataSource.post(params)

    }
    async updateTodoListItem(data: IUpdateListItemRequestDTO) : Promise<IHttpResponse> {
        const params = {
            url: 'listItem/update',
            data: {...data}
        }
        return await this.dataSource.post(params)

    }
    async deleteTodoListItem(data: IDeleteListItemRequestDTO): Promise<IHttpResponse>{
        const params = {
            url:  'listItem/delete',
            data: {...data}
        }
        return await this.dataSource.post(params)

    }
    async addTodoListItem(data: IAddNewTodoListItemRequestDTO): Promise<IHttpResponse>{
        const params = {
            url: 'listItem/create',
            data: {...data}
        }
        return await this.dataSource.post(params)

    }
}