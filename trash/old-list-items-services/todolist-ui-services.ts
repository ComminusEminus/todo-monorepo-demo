import {Responses, ITodoList, ITodoListContainer, ITodoListItem,IAddNewListItemResponseDTO, IHttpResponse, IGetListByIdResponseDTO, IGetAllListsResponseDTO, CompleteState} from '@core/entities'


export const mapGetListByIdResponse = (response: IHttpResponse) => {
    const {data} = response;
    
    const {list, message, error}: IGetListByIdResponseDTO = data

    if(!list){
        throw new Error('mapToListDescription cannot find todoListsItem data')
    }
    
    const {listItems}: ITodoList = list

    if(listItems.length === 0){
        const mappedResponse = {list: [], message: message, error: error}
        return mappedResponse
    }

    const mappedList: ITodoListItem[] = listItems.map((list: ITodoListItem) => {
        return {
            _id: list._id,
            title: list.title,
            description: list.description,
            complete: list.complete
        }
    })

    const mappedResponse = {list: mappedList, message: message, error: error}

    return mappedResponse;
}


export const mapGetAllListsResponse = (response: IHttpResponse) => {
    const {data} = response
    const {lists, message, error}: IGetAllListsResponseDTO = data 
    
    if(!lists){
        throw new Error('GetAll lists response empty')
    }

    const {todoLists}: ITodoListContainer = lists

    if(!todoLists){
        throw new Error('GetAll lists response empty')
    }

    const mappedLists: ITodoList[] = todoLists?.map((list: ITodoList) => {
        return{
            _id: list._id,
            title: list.title,
            listItems: list.listItems
        }
    }) 

    return {
        lists, message, error
    }
}


export const mapAddNewTodoListItemResponse = (response: IHttpResponse): IAddNewListItemResponseDTO => {
    const {data} = response;
    
    if(!data){
        throw new Error('mapAddNewTodoListItemResponse cannot find data in response')
    }

    const {message, error}: IAddNewListItemResponseDTO = data
    
    if(!message){
        throw new Error('Map Add New Todo List Item Response is missing message')
    }

    const mappedResponse = {
        message: message,
        errror: error
    }
    return mappedResponse
}


export const filterCompletedListItems = (todoListItems: ITodoListItem[]) => {

    const filteredList = todoListItems.filter((listItem: ITodoListItem) => {
        if(listItem.complete === CompleteState.COMPLETED){
            return listItem;
        }
    })
    return filteredList;
}

export const filterIncompleteListItems = (todoListItems: ITodoListItem[]) => {
    const filteredList = todoListItems.filter((listItem: ITodoListItem) => {
        if(listItem.complete === CompleteState.INCOMPLETE){
            return listItem
        }
    })
    return filteredList;
}