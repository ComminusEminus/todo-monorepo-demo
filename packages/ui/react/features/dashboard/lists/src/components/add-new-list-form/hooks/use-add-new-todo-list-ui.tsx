import React, { useEffect } from 'react'
import { useAddNewTodoListApi } from '@reactui/http'

import { useOpenAddNewListFormHandler } from '../../open-add-new-list-button/hooks/use-open-add-new-list-form-handler'
import { useAllListsContext, ALL_LISTS_ACTIONS } from '@reactui/contexts'

export const useAddNewTodoListUI = () => {
    const { addNewTodoListApiHandler, addNewListApiState } = useAddNewTodoListApi()
    const { returnValue, loading } = addNewListApiState
    const { message, error } = returnValue
    
    const {dispatch: allListsDispatch, state: allListsState} = useAllListsContext()

    const { openAddNewListFormHandler, state } = useOpenAddNewListFormHandler()
    
    
    useEffect(() => {
        if (message === 'ok') {
            allListsDispatch({type: ALL_LISTS_ACTIONS.UPDATE_ALL_LISTS, payload: ''})
            openAddNewListFormHandler()
        }

    }, [message])
   
    return {
        addNewTodoListApiHandler,
        addNewListApiState
    }
}