import React, {useEffect} from 'react'
import { UIACTIONS} from '@core/entities'
import {useAddNewTodoListApi} from '@reactui/http'
import {useUIContext} from '@reactui/contexts';

export const useAddNewTodoListUI = () => {
    const {dispatch} = useUIContext()
    const {addNewTodoListApiHandler, addNewListApiState} = useAddNewTodoListApi()
    const {returnValue, errorMessage, loading} = addNewListApiState
    const {message, error} = returnValue

    useEffect(() => {
        if(message === 'ok'){
            console.log('executing use effect in ui dispatch')
            dispatch({type: UIACTIONS.SELECT_FORM_TYPE, payload: null})
            //dispatch({type: UIACTIONS.UPDATE_TODO_LIST, payload: undefined})
        }

    },[returnValue])

    return{
        addNewTodoListApiHandler,
        addNewListApiState
    }
}