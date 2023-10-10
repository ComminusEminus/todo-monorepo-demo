import {Responses, ITodoListItem,IAddNewListItemResponseDTO, IHttpResponse, IGetListByIdResponseDTO, CompleteState} from '@core/entities'


export const mapToListDescription = (response: IHttpResponse) => {
    const {data} = response;
    
    const {list, message, error}: IGetListByIdResponseDTO = data

    if(!list){
        throw new Error('mapToListDescription cannot find todoListsItem data')
    }
    
    const {_id, title, listItems} = list
    console.log(listItems)
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