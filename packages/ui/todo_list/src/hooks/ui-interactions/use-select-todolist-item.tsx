import {useListItemContext, useUIContext} from '@ui/contexts'
import {UIACTIONS} from '@core/entities'
import React from 'react'

export const useSelectTodoListItem = () => {
    const {state, dispatch} = useListItemContext()
    const {listItemData} = state
    
    const {state: listsState, dispatch: listsDispatch} = useUIContext()
    const {selectedTodoListItemId} = listsState

    const selectListItemForDetailViewHandler = (id: string) => {
        if(!listItemData){
            throw new Error("List item data is empty");
        }
        if(selectedTodoListItemId === id){
            console.log('item already selected')
        }
        listsDispatch({type: UIACTIONS.SELECT_TODO_LIST_ITEM_BY_ID, payload: id})
        
    }
    const resultValues = {
        listItemData, selectedTodoListItemId
    }
    return {selectListItemForDetailViewHandler, resultValues} ;
}