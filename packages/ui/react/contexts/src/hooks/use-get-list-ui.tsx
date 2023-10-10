import React, { useEffect } from 'react'

import { useUIContext } from '../providers/ui-context'

import {useGetTodoListById} from '@reactui/http'

export const useGetListUi = () => {
    const {getTodoListApiHandler, todoListApiState} = useGetTodoListById()
    const { returnValue } = todoListApiState
    const { list, message, error } = returnValue
    
    const { state: uiState } = useUIContext();
    const { selectedTodoListId, updateTodoListItems } = uiState

    useEffect(() => {
        if(selectedTodoListId){
            getTodoListApiHandler(selectedTodoListId)
        }   
    }, [selectedTodoListId])
    
    return {todoListApiState}

    
}
