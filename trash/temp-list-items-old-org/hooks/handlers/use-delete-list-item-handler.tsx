import React from 'react'
import {useListItemContext, useUIContext} from '@reactui/contexts'
import {LIST_ITEM_ACTIONS, UIACTIONS} from '@core/entities'
import {useDeleteListItemUi} from '../ui-interactions/use-delete-list-item-ui'

export const useDeleteListItemHandler = () => {
    const {dispatch, state} = useListItemContext()
    const {listItemData, visibilityState} = state

    const {state: uiState, dispatch: uiDispatch} = useUIContext();
    const {selectedTodoListId} = uiState

    const {deleteApiState, deleteListItemApiHandler} = useDeleteListItemUi({uiDispatch})

    const deleteListItemHandler = () => {
        deleteListItemApiHandler(listItemData._id, selectedTodoListId)
    }
    
    return {state, deleteListItemHandler, deleteApiState}  
}

