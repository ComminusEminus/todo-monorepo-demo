import React, {useEffect} from 'react'
import { IUIAction, UIACTIONS} from '@core/entities'
import {useAddNewTodoListApi} from '../api/use-add-new-todo-list-api'
import {useUIContext} from '@ui/contexts';

export const useAddNewTodoListUI = () => {
    const {dispatch} = useUIContext()
    const {addNewTodoListApiHandler, addNewListApiState} = useAddNewTodoListApi()
    const {returnValue, errorMessage, loading} = addNewListApiState
    const {message, error} = returnValue

    useEffect(() => {
        if(message === 'ok'){
            console.log('executing use effect in ui dispatch')
            dispatch({type: UIACTIONS.SELECT_FORM_TYPE, payload: null})
            dispatch({type: UIACTIONS.UPDATE_TODO_LIST, payload: undefined})
        }

    },[returnValue])

    return{
        addNewTodoListApiHandler,
        addNewListApiState
    }
}