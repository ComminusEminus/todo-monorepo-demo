import {ITodoListItem, IAxiosResponse} from '@todo/entities'


export interface ITodoListItemDescription{
    id: string;
    title: string;
    complete: string;
}

export const mapToListDescription = (response: IAxiosResponse): ITodoListItemDescription[] => {
    const mappedResponse = response.data.map((list: ITodoListItem) => {
        return {
            id: list.id,
            title: list.title,
            complete: list.complete
        }
    })
    return mappedResponse;
}

export const filterCompletedListItems = (todoListItems: ITodoListItemDescription[]) => {

    const filteredList = todoListItems.filter((listItem: ITodoListItemDescription) => {
        if(listItem.complete === 'TRUE'){
            return listItem;
        }
    })
    return filteredList;
}

export const filterIncompleteListItems = (todoListItems: ITodoListItemDescription[]) => {
    const filteredList = todoListItems.filter((listItem: ITodoListItemDescription) => {
        if(listItem.complete === 'FALSE'){
            return listItem
        }
    })
    return filteredList;
}