import { useRef, useEffect } from 'react'
import { CompleteState } from '@core/entities'
import { useListItemContext } from '@reactui/contexts'
import { useCompleteListItemUi } from './use-complete-list-item-ui'


export const useCompleteListItemHandler = () => {
    const { dispatch, state } = useListItemContext()
    const { listItemData } = state

    const { completeApiState, updateTodoListItemCompleteStateApi } = useCompleteListItemUi()

    const completeHandler = () => {
        if (!listItemData) {
            throw new Error('ListItemData not available in use completeTodoListItemUI')
        }
        if (listItemData.complete === CompleteState.INCOMPLETE) {
            console.log('complete handler')
            updateTodoListItemCompleteStateApi(listItemData, CompleteState.COMPLETED)

        } else {
            console.log('complete handler')
            updateTodoListItemCompleteStateApi(listItemData, CompleteState.INCOMPLETE)
        }
    }

    return { listItemData, completeHandler, completeApiState }
}

