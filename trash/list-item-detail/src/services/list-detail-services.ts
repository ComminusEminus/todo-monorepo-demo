import {ITodoListItem, IHttpResponse, CompleteState} from '@core/entities'

export const mapListItemDetailView = (response: IHttpResponse) => {
    const {data}  = response;
    const {listItem} = data;
    const mappedResponse = (listItem: ITodoListItem) => {
        const completeState = listItem.complete == CompleteState.COMPLETED ? CompleteState.COMPLETED : CompleteState.INCOMPLETE
        return {
            _id: listItem._id,
            title: listItem.title,
            description: listItem.description,
            complete: completeState
        }
    }
    
    return mappedResponse;
}