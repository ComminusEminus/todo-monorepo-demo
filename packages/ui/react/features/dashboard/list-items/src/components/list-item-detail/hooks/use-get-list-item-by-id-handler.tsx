import React, { useEffect } from 'react'
import { useGetListItemById } from '@reactui/http'
import { useUIContext } from '@reactui/contexts';

export const useGetListItemByIdHandler = () => {
    const { state, dispatch } = useUIContext()
    const { selectedTodoListItemId } = state

    const { getListItemByIdApiHandler, getListItemApiState } = useGetListItemById()
    const { returnValue } = getListItemApiState
    const { message, listItem } = returnValue

    useEffect(() => {
        if (selectedTodoListItemId) {
            getListItemByIdApiHandler(selectedTodoListItemId)
        }
    }, [selectedTodoListItemId])

    return {
        listItem
    }
}

