import React from 'react'
import { useListsContext, useUIContext, UIACTIONS } from '@reactui/contexts'

export const useSelectListHandler = () => {
    const { state } = useListsContext()
    const { listsData } = state

    const { dispatch, state: uiState } = useUIContext()
    const { selectedTodoListId } = uiState

    const selectListHandler = (id: string) => {
        if (selectedTodoListId == id) {
            console.log('Item already selected')
        }

        dispatch({ type: UIACTIONS.SELECT_TODO_LIST_BY_ID, payload: id })
    }
    const resultValues = {
        listsData,
        selectedTodoListId
    }
    return { selectListHandler, resultValues } as const;
}