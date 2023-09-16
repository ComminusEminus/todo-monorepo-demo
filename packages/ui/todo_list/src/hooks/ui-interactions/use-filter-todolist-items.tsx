import React, {useState, useEffect, FC} from 'react'
import {filterCompletedListItems, filterIncompleteListItems} from '../../services/todolist-ui-services'
import {Filter} from '@core/entities'
import {ITodoListItemDescription, ITodoListItem} from '@core/entities'
import {useGetTodoListById} from '../api/use-get-todolist-by-id'
import {useUIContext} from '@ui/contexts'
import {useGetTodoListByIdImplementation} from '../implementation/use-get-todolist-by-id-implementation'

export const useFilterTodoListItems = () => {
    const {dispatch, state} = useUIContext();
    const {selectedTodoListId, updateTodoListItems} = state
    
    const {todoListApiState} = useGetTodoListByIdImplementation({selectedTodoListId, updateTodoListItems})
    
    const {returnValue} = todoListApiState
    const {list, message, error} = returnValue

    const [filterListState, setFilterListState] = useState<string>(Filter.ALL_LIST_ITEMS)
    const [filteredList, setFilteredList] = useState<ITodoListItem[] | null>(null)

    useEffect(() => {
        if(list){
            if(filterListState === Filter.ALL_LIST_ITEMS){
                setFilteredList?.(list)
            }else if(filterListState === Filter.COMPLETE_LIST_ITEMS){
                setFilteredList?.(filterCompletedListItems(list))
            }else if(filterListState === Filter.INCOMPLETE_LIST_ITEMS){
                setFilteredList?.(filterIncompleteListItems(list))
            }
        }
    }, [filterListState, list])

    const filterListHandler = (filterString: Filter) => {
        setFilterListState(filterString);
    }
    console.log('useFiltertodolistitems filtered list')
    console.log(filteredList)
    return {filterListHandler, filteredList, filterListState} ;

}
