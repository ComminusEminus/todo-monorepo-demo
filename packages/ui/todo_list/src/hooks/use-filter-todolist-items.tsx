import React, {useState, useEffect} from 'react'
import {filterCompletedListItems, filterIncompleteListItems} from '@todo/todolist-ui-services'
import {Filter} from '@todo/constants'
import {useListContext} from '@todo/ui-context'

export const useFilterTodoListItems = () => {
    const {todoList, setDisplayListItem} = useListContext()
    const [filterListState, setFilterListState] = useState<string>(Filter.ALL_LIST_ITEMS)

    useEffect(() => {
        if(todoList === undefined){
            return;
        }
        if(filterListState === Filter.ALL_LIST_ITEMS){
            setDisplayListItem?.(todoList)
        }else if(filterListState === Filter.COMPLETE_LIST_ITEMS){
            setDisplayListItem?.(filterCompletedListItems(todoList))
        }else if(filterListState === Filter.INCOMPLETE_LIST_ITEMS){
            setDisplayListItem?.(filterIncompleteListItems(todoList))
        }
        
    }, [filterListState])

    const filterListHandler = (e: React.MouseEvent<HTMLInputElement>) => {
        const filter = (e.target as HTMLButtonElement).value
        setFilterListState(filter);
    }

    return {filterListHandler} as const;

}
