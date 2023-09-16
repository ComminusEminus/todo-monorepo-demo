import { useRef, useEffect } from 'react'
import { useCompleteTodoListItemUI } from '../ui-interactions/use-complete-todolist-items-ui'
import { useCompleteTodoListItem } from '../api/use-complete-todolist-items'
import { useUIContext } from '@ui/contexts'
import {ITodoListItem, UIACTIONS, CompleteState, IMappedUserProfile} from '@core/entities'


export interface IUseCompleteTodoListItemsImplementation{
    listItemData?: ITodoListItem| null,
    completeState?: CompleteState| null,
}

export const useCompleteTodoListItemsImplementation = () => {
    const { dispatch } = useUIContext()

    const {updateTodoListItemCompleteStateApi, completeApiState, setReturnValue} = useCompleteTodoListItem()
    const {loading, returnValue, error} = completeApiState
    const {message} = returnValue
    //const isMounted = useRef<true | false>(false);

    useEffect(() => {
        if(message === 'ok'){
            //updateTodoListItemCompleteStateApi(listItemData, completeState)
            dispatch({type: UIACTIONS.UPDATE_TODO_LIST_ITEMS, payload: null})
            setReturnValue((returnValue) => { 
                return {
                    ...returnValue, 
                    message: undefined 
                }
            })
        }
    }, [message])

    return{completeApiState, updateTodoListItemCompleteStateApi}
}