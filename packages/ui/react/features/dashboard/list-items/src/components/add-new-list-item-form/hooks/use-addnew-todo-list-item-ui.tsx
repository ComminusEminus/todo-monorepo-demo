import React, { useEffect } from 'react'


import { useAddNewTodoListItemApi } from '@reactui/http'
import { useSelectedListContext, SELECTED_LIST_ACTIONS } from '@reactui/contexts';
import {useOpenAddNewListItemFormHandler} from '../../open-add-new-list-item-form/hooks/use-open-new-list-item-form-handler'

export const useAddNewTodoListItemUI = () => {
    const { dispatch } = useSelectedListContext()
    
    const { addNewTodoListItemApiHandler, addNewTodoListApiState } = useAddNewTodoListItemApi()
    const { returnValue, loading } = addNewTodoListApiState
    const { message, error } = returnValue

    const {openAddNewListItemFormHandler, state} = useOpenAddNewListItemFormHandler()
    console.log(message)
    useEffect(() => {
        if (message === 'ok') {
            console.log('inside use effect conditional add new todo list item')
            dispatch({ type: SELECTED_LIST_ACTIONS.UPDATE_LIST, payload: null })
            openAddNewListItemFormHandler()
        }

    }, [message])

    return {
        addNewTodoListItemApiHandler,
        addNewTodoListApiState,
    }

}