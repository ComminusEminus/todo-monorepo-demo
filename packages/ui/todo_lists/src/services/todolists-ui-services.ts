import {ITodoList} from '@core/entities'

export interface IMapToListDescription{
    data: ITodoList[];
}

export interface ITodoListAsListDescription{
    id: string;
    title: string;
}

export const mapToListsDescription = (response: IMapToListDescription): ITodoListAsListDescription[] => {
    const mappedResponse = response.data.map((list: ITodoListAsListDescription) => {
        return {
            id: list.id,
            title: list.title
        }
    })
    return mappedResponse;
}
