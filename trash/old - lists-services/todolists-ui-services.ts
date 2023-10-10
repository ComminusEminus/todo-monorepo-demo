import {ITodoList, Responses, IGetAllListsResponseDTO, IHttpResponse, IAddNewListResponseDTO} from '@core/entities'


export const mapToListsDescription = (response: IHttpResponse): IGetAllListsResponseDTO => {
    const {data} = response;
    const {lists, message, error} = data;
    const {userId, todoLists} = lists;
    
    if(!todoLists){
        return {
            message: undefined,
            error: undefined,
            lists: undefined
        }
    }

    const mappedList = todoLists.map((list: ITodoList) => {
        const {_id, title, listItems} = list
        return {
            _id: _id,
            title: title,
            listItems: listItems 
        }
    })
    return {
        message: message,
        lists: mappedList,
        error: undefined
    };
}

export const mapAddNewTodoListResponse = (response: IHttpResponse): IAddNewListResponseDTO => {
    const {data} = response;
    
    if(!data){
        throw new Error('mapAddNewTodoListItemResponse cannot find data in response')
    }

    const {message, error}: IAddNewListResponseDTO = data
    
    if(!message){
        throw new Error('Map Add New Todo List Response is missing message')
    }

    const mappedResponse = {
        message: message,
        errror: error
    }
    return mappedResponse
}
