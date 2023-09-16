import React, {useEffect} from 'react'
import { IUIAction, UIACTIONS} from '@core/entities'
import {useAddNewTodoListItemApi} from '../api/use-addnew-todo-list-item-api'
import { useUIContext } from '@ui/contexts';

export const useAddNewTodoListItemUI = () => {
    const { dispatch } = useUIContext()
    const { addNewTodoListItemApiHandler, addNewTodoListApiState } = useAddNewTodoListItemApi()
    const { returnValue, errorMessage, loading } = addNewTodoListApiState
    const {message, error} = returnValue
    
    useEffect(() => {
        if(message === 'ok'){
            console.log('executing use add new todo list item dispatch')
            dispatch({type: UIACTIONS.SELECT_FORM_TYPE, payload: null})
            dispatch({type: UIACTIONS.UPDATE_TODO_LIST_ITEMS, payload: null})
        }

    },[returnValue])
    
    return {
        addNewTodoListItemApiHandler,
        addNewTodoListApiState,
    }
    
}