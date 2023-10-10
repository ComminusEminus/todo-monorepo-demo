import { useEffect } from 'react'
import { useCompleteTodoListItem } from '@reactui/http'
import { useUIContext } from '@ui/contexts'
import {ITodoListItem, UIACTIONS, CompleteState} from '@core/entities'


export interface IUseCompleteTodoListItemsImplementation{
    listItemData?: ITodoListItem| null,
    completeState?: CompleteState| null,
}

export const useCompleteListItemUi = () => {
    const { dispatch } = useUIContext()

    const {updateTodoListItemCompleteStateApi, completeApiState, setReturnValue} = useCompleteTodoListItem()
    const {loading, returnValue, error} = completeApiState
    const {message} = returnValue
    

    useEffect(() => {
        if(message === 'ok'){
            dispatch({type: UIACTIONS.UPDATE_TODO_LIST_ITEMS, payload: null})
        }
    }, [message])

    return{completeApiState, updateTodoListItemCompleteStateApi}
}

//unsure if needed 
/*
setReturnValue((returnValue: any) => { 
                return {
                    ...returnValue, 
                    message: undefined 
                }
            })

*/