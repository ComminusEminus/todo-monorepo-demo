import React from 'react'

import { useListItemContext, useUIContext, UIACTIONS } from '@reactui/contexts'

export const useSelectListItemHandler = () => {
    const { state } = useListItemContext()
    const { listItemData } = state

    const { state: listsState, dispatch } = useUIContext()
    const { selectedTodoListItemId } = listsState

    const selectListItemHandler = () => {
        if (!listItemData) {
            throw new Error("List item data is empty");
        }
        if (selectedTodoListItemId === listItemData._id) {
            return
        }
        dispatch({ type: UIACTIONS.SELECT_TODO_LIST_ITEM_BY_ID, payload: listItemData._id })
    }

    const resultValues = {
        listItemData, selectedTodoListItemId
    }

    return { selectListItemHandler, resultValues };
}