import {ITodoListItem, IAxiosResponse, ITodoListItemDescription, ListItemStatus} from '@core/entities'


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
        if(listItem.complete === ListItemStatus.COMPLETED){
            return listItem;
        }
    })
    return filteredList;
}

export const filterIncompleteListItems = (todoListItems: ITodoListItemDescription[]) => {
    const filteredList = todoListItems.filter((listItem: ITodoListItemDescription) => {
        if(listItem.complete === ListItemStatus.INCOMPLETE){
            return listItem
        }
    })
    return filteredList;
}