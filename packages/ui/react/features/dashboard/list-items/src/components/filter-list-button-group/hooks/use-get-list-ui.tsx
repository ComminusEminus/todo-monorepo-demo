import React, { useEffect } from 'react'
import { useSelectedListContext, useUIContext, SELECTED_LIST_ACTIONS } from '@reactui/contexts'
import { useGetListHandler } from './use-get-list-handler'

export const useGetListUi = () => {

    const { state: uiState } = useUIContext();
    const { selectedTodoListId, updateTodoListItems } = uiState

    const { state, dispatch } = useSelectedListContext()
    const { selectedList } = state


    const { todoListApiState } = useGetListHandler({ selectedTodoListId })
    const { returnValue } = todoListApiState
    const { list, message, error } = returnValue

    useEffect(() => {
        if (message === 'ok') {
            dispatch({ type: SELECTED_LIST_ACTIONS.UPDATE_SELECTED_LIST, payload: list })
        }
    }, [message])

    return {
        selectedList,
        dispatch
    }

}
