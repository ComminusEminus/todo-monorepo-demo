import {useListsContext, useUIContext} from '@ui/contexts'
import {LISTS_ACTIONS, UIACTIONS} from '@core/entities'
import React from 'react'

export const useSelectTodoListUI = () => {
    const {state} = useListsContext()
    const {listsData} = state

    const {dispatch, state: uiState} = useUIContext()
    const {selectedTodoListId} = uiState

    const selectListForDetailViewHandler = (id: string) => {
        if(selectedTodoListId == id){
            console.log('Item already selected')
        }
        
        dispatch({type: UIACTIONS.SELECT_TODO_LIST_BY_ID, payload: id})
    }
    const resultValues = {
        listsData,
        selectedTodoListId
    }
    return {selectListForDetailViewHandler, resultValues} as const;
}