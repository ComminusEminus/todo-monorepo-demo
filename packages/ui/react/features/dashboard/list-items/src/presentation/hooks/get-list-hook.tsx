import React, {useEffect, useState} from 'react'
import { useUIContext } from '@reactui/contexts'
import { useGetTodoListById } from '@reactui/http'
import { useSelectedListContext } from '@reactui/contexts'

export const GetListHook = () => {
    const { getTodoListApiHandler, todoListApiState } = useGetTodoListById()
    const { returnValue } = todoListApiState
    const { list, message, error } = returnValue

    const {state} = useSelectedListContext()
    const {update} = state

    const { state: uiState } = useUIContext();
    const { selectedTodoListId, updateTodoListItems } = uiState

    useEffect(() => {

        if (selectedTodoListId) {
    
          getTodoListApiHandler(selectedTodoListId)
        }
      }, [selectedTodoListId, update])


    return {list}
}