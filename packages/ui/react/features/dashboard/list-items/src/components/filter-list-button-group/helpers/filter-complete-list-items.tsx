import {ITodoListItem, CompleteState, Filter} from '@core/entities'

export const filterCompleteListItems = (todoListItems: ITodoListItem[]) => {

    const filteredList = todoListItems.filter((listItem: ITodoListItem) => {
        if(listItem.complete === CompleteState.COMPLETED){
            return listItem;
        }
    })
    return filteredList;
}

