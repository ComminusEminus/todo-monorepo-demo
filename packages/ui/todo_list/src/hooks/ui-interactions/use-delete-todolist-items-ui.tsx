import React from 'react'
import {useListItemContext, useUIContext} from '@ui/contexts'
import {LIST_ITEM_ACTIONS, UIACTIONS} from '@core/entities'
import {useDeleteTodoListItemsImplementation} from '../implementation/use-delete-todolist-items-implementation'

export const useDeleteTodoListItemUI = () => {
    const {dispatch, state} = useListItemContext()
    const {listItemData, visibilityState} = state

    const {state: uiState, dispatch: uiDispatch} = useUIContext();
    const {selectedTodoListId} = uiState

    const {deleteApiState} = useDeleteTodoListItemsImplementation({listItemData, selectedTodoListId, visibilityState})

    const visibilityHandler = () => {
        dispatch({type: LIST_ITEM_ACTIONS.UPDATE_VISIBILITY_STATE, payload: null})
        uiDispatch({type: UIACTIONS.UPDATE_TODO_LIST_ITEMS, payload: null})
        
    }
    
    return {state, visibilityHandler, deleteApiState}  
}

