import { useRef, useEffect } from 'react'
import { useDeleteTodoListItem } from '@reactui/http'
import {UIACTIONS} from '@core/entities'

export interface IUseDeleteTodoListItemsImplementation{
    uiDispatch: any;
}

export const useDeleteListItemUi = ({uiDispatch}: IUseDeleteTodoListItemsImplementation) => {

    const {deleteListItemApiHandler, deleteApiState} = useDeleteTodoListItem()
    
    const {returnValue} = deleteApiState
    const {message} = returnValue
    
    useEffect(() => {
        if(message === 'ok'){
            uiDispatch({type: UIACTIONS.UPDATE_TODO_LIST_ITEMS, payload: null})
        }
    }, [message])
    return {
        deleteApiState,
        deleteListItemApiHandler
    }
}


