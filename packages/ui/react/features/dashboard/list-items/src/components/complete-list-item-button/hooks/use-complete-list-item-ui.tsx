import { useEffect } from 'react'
import { ITodoListItem, CompleteState } from '@core/entities'
import { useCompleteTodoListItem } from '@reactui/http'
import { useSelectedListContext, SELECTED_LIST_ACTIONS } from '@reactui/contexts'

export interface IUseCompleteTodoListItemsImplementation {
    listItemData?: ITodoListItem | null,
    completeState?: CompleteState | null,
}

export const useCompleteListItemUi = () => {
    const { dispatch } = useSelectedListContext()

    const { updateTodoListItemCompleteStateApi, completeApiState } = useCompleteTodoListItem()
    const { loading, returnValue } = completeApiState
    const { message } = returnValue


    useEffect(() => {
        if (message === 'ok') {
            dispatch({ type: SELECTED_LIST_ACTIONS.UPDATE_LIST, payload: null })
        }
    }, [message])

    return { completeApiState, updateTodoListItemCompleteStateApi }
}

