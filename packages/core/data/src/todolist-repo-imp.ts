import {IHttpClient} from '@core/entities'
import {ITodoListRepository} from '@core/abstractions'
import {ITodoListItem, IAxiosResponse} from '@core/entities'

export class TodoListRepoImp implements ITodoListRepository{
    dataSource: IHttpClient;

    constructor(dataSource: IHttpClient){
        this.dataSource = dataSource
    }
    async getAllTodosLists(userId: string): Promise<IAxiosResponse> {
        const params = {
            url: 'todoList/all',
            data: userId
        }
        return await this.dataSource.get(params)
       
    }
    async addNewTodoList(listData: ITodoListItem, userId: string): Promise<IAxiosResponse> {
        const params = {
            url: 'todoList/add',
            data: {
                listData,
                userId
            }
        }
        return await this.dataSource.post(params)
         
    }
    async deleteTodoList(listId: string, userId: string): Promise<IAxiosResponse>{
        const params = {
            url: 'todoList/delete',
            data: {
                listId,
                userId
            } 
        }

        return await this.dataSource.delete(params)
        

    }
    async getTodoListById(listId: string): Promise<IAxiosResponse>{
        const params = {
            url: 'todoList/getById',
            data: {
                listId: listId
            }
        }
        return await this.dataSource.get(params)
        
    }
   
}