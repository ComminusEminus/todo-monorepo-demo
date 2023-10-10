import React, {useEffect} from 'react'
import { IUIAction, UIACTIONS} from '@core/entities'
import {useAddNewTodoListItemApi} from '@reactui/http'
import { useUIContext } from '@reactui/contexts';

export const useAddNewTodoListItemUI = () => {
    const { dispatch } = useUIContext()
    const { addNewTodoListItemApiHandler, addNewTodoListApiState } = useAddNewTodoListItemApi()
    const { returnValue, errorMessage, loading } = addNewTodoListApiState
    const {message, error} = returnValue
    
    useEffect(() => {
        if(message === 'ok'){
            dispatch({type: UIACTIONS.SELECT_FORM_TYPE, payload: null})
            //dispatch({type: UIACTIONS.UPDATE_TODO_LIST_ITEMS, payload: null})
        }

    },[returnValue])
    
    return {
        addNewTodoListItemApiHandler,
        addNewTodoListApiState,
    }
    
}