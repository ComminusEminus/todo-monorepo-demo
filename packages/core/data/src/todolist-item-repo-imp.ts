import {ITodoListItemRepository} from '@core/abstractions'
import {IAddNewTodoListItemFormResponse, ITodoListItem, IAxiosResponse, IHttpClient} from '@core/entities'

export class TodoListItemRepoImp implements ITodoListItemRepository{
    dataSource: IHttpClient;

    constructor(dataSource: IHttpClient){
        this.dataSource = dataSource
    }

    async getTodoListItemById(todoListItemId: string): Promise<IAxiosResponse>{
        const params = {
            url: 'listItem/getById',
            data: {
                todoListItemId: todoListItemId
            }
        }
        
        return await this.dataSource.get(params)

    }
    async updateTodoListItem(updateData: ITodoListItem) : Promise<IAxiosResponse> {
        const params = {
            url: 'listItem/update',
            data: {
                updateData
            }
        }
        return await this.dataSource.put(params)

    }
    async deleteTodoListItem(listItemId: string, listId: string): Promise<IAxiosResponse>{
        const params = {
            url: 'listItem/delete',
            data: {
                listItemId: listItemId,
                listId: listId 
            }
        }
        return await this.dataSource.delete(params)

    }
    async addTodoListItem(todoListItemId: string, listItem: IAddNewTodoListItemFormResponse): Promise<IAxiosResponse>{
        const params = {
            url: 'listItem/add',
            data: {
                todoListItemId: todoListItemId,
                listItem: listItem
            }
        }
        return await this.dataSource.post(params)

    }
}