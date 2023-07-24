import {ITodoList, IRequestListsResponse, ITodoListAsListDescription} from '@core/entities'


export const mapToListsDescription = (response: IRequestListsResponse): ITodoListAsListDescription[] => {
    const mappedResponse = response.data.map((list: ITodoListAsListDescription) => {
        return {
            id: list.id,
            title: list.title
        }
    })
    return mappedResponse;
}
