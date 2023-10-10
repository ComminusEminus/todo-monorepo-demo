import React from 'react'
import { useListItemContext, useUIContext } from '@reactui/contexts'
import { useDeleteListItemUi } from './use-delete-list-item-ui'

export const useDeleteListItemHandler = () => {
    const { dispatch, state } = useListItemContext()
    const { listItemData } = state

    const { state: uiState, dispatch: uiDispatch } = useUIContext();
    const { selectedTodoListId } = uiState

    const { deleteApiState, deleteListItemApiHandler } = useDeleteListItemUi()

    const deleteListItemHandler = () => {
        if(!listItemData || !selectedTodoListId){
            return
        }
        deleteListItemApiHandler(listItemData._id, selectedTodoListId)
    }

    return { state, deleteListItemHandler, deleteApiState }
}

