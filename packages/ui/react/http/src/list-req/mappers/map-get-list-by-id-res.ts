import { ITodoList, ITodoListItem, IHttpResponse, IGetListByIdResponseDTO} from '@core/entities'

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

