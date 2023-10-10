import {ITodoListItem, CompleteState, Filter} from '@core/entities'

export const filterIncompleteListItems = (todoListItems: ITodoListItem[]) => {
    const filteredList = todoListItems.filter((listItem: ITodoListItem) => {
        if(listItem.complete === CompleteState.INCOMPLETE){
            return listItem
        }
    })
    return filteredList;
}
