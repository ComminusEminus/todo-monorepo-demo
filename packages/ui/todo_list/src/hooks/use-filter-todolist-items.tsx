import React, {useState, useEffect, FC} from 'react'
import {filterCompletedListItems, filterIncompleteListItems} from '../services/todolist-ui-services'
import {Filter} from '@core/entities'
import {ITodoListItemDescription} from '@core/entities'

export interface IUseFilterTodoListItems{
    list?: ITodoListItemDescription[]
}

export const useFilterTodoListItems = (list: ITodoListItemDescription[]) => {
//    const {todoList, setDisplayListItem} = useListContext()
    const [filterListState, setFilterListState] = useState<string>(Filter.ALL_LIST_ITEMS)
    const [filteredList, setFilteredList] = useState<Array<ITodoListItemDescription> | undefined>(list)
    useEffect(() => {
        if(list === undefined){
            return;
        }
        if(filterListState === Filter.ALL_LIST_ITEMS){
            setFilteredList?.(list)
        }else if(filterListState === Filter.COMPLETE_LIST_ITEMS){
            setFilteredList?.(filterCompletedListItems(list))
        }else if(filterListState === Filter.INCOMPLETE_LIST_ITEMS){
            setFilteredList?.(filterIncompleteListItems(list))
        }
        
    }, [filterListState])

    const filterListHandler = (e: React.MouseEvent<HTMLInputElement>) => {
        const filter = (e.target as HTMLButtonElement).value
        setFilterListState(filter);
    }

    return {filterListHandler, filteredList} ;

}
