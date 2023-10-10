import React, { useRef, useEffect } from 'react'

import { useDeleteTodoListItem } from '@reactui/http'
import { useSelectedListContext, SELECTED_LIST_ACTIONS } from '@reactui/contexts'


export const useDeleteListItemUi = () => {
    const { dispatch } = useSelectedListContext()
    const { deleteListItemApiHandler, deleteApiState } = useDeleteTodoListItem()
    const { returnValue } = deleteApiState
    const { message } = returnValue

    useEffect(() => {
        if (message === 'ok') {
            dispatch({ type: SELECTED_LIST_ACTIONS.UPDATE_LIST, payload: null })
        }
    }, [message])

    return {
        deleteApiState,
        deleteListItemApiHandler
    }
}


