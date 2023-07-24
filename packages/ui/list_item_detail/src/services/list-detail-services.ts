import {ITodoListItem, IAxiosResponse} from '@core/entities'

export const mapListItemDetailView = (response: IAxiosResponse): ITodoListItem => {
    const {data}  = response;
    const mappedResponse = response.data.map((list: ITodoListItem) => {
        return {
            id: list.id,
            title: list.title,
            description: list.description,
            complete: list.complete
        }
    })
    
    return mappedResponse[0];
}