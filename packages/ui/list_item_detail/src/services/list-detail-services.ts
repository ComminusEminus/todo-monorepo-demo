import {ITodoListItem, IAxiosResponse} from '@core/entities'

export interface IMapListItemDetailView{
    id: string;
    title: string;
    description: string;
    complete: string;
}

export const mapListItemDetailView = (response: IAxiosResponse): IMapListItemDetailView => {
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