import { useRef, useEffect } from 'react'
import { CompleteState } from '@core/entities'
import { useListItemContext, useUIContext } from '@ui/contexts'
import { ITodoListItem, IUpdateListItemResponseDTO, Responses, UIACTIONS, LIST_ITEM_ACTIONS } from '@core/entities'
import {useCompleteTodoListItemsImplementation} from '../implementation/use-complete-todolist-items-implementation'


export const useCompleteTodoListItemUI = () => {
    const { dispatch, state } = useListItemContext()
    const {listItemData} = state
    
    const {completeApiState, updateTodoListItemCompleteStateApi} = useCompleteTodoListItemsImplementation()

    const completeHandler = () => {
        //dispatch({ type: LIST_ITEM_ACTIONS.UPDATE_COMPLETE_STATE, payload: null })
        let newCompleteState
        if(!listItemData){
            throw new Error('ListItemData not available in use completeTodoListItemUI')
        }
        if(listItemData.complete === CompleteState.INCOMPLETE){
            newCompleteState = CompleteState.COMPLETED
        }else{
            newCompleteState = CompleteState.INCOMPLETE
        }
        updateTodoListItemCompleteStateApi(listItemData, newCompleteState)
    }

    return { listItemData, completeHandler, completeApiState }
}

