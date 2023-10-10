import {useListsContext, useUIContext} from '@reactui/contexts'
import { UIACTIONS} from '@core/entities'
import React from 'react'

export const useSelectListHandler = () => {
    const {state} = useListsContext()
    const {listsData} = state

    const {dispatch, state: uiState} = useUIContext()
    const {selectedTodoListId} = uiState

    const selectListHandler = (id: string) => {
        if(selectedTodoListId == id){
            console.log('Item already selected')
        }
        
        dispatch({type: UIACTIONS.SELECT_TODO_LIST_BY_ID, payload: id})
    }
    const resultValues = {
        listsData,
        selectedTodoListId
    }
    return {selectListHandler, resultValues} as const;
}