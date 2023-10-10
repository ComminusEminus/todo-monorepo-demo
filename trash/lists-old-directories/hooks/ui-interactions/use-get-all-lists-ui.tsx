import {useUIContext} from '@reactui/contexts'
import React, {useEffect} from 'react'
import {useGetAllTodoListsApi} from '@reactui/http'

export const useGetAllListsUi = () => {
    const {dispatch, state} = useUIContext()
    const {updateTodoList} = state;
    
    const {getAllTodoListsApiHandler, getAllTodoListsApiState} = useGetAllTodoListsApi()

    useEffect(() => {

        getAllTodoListsApiHandler()
        
    }, [updateTodoList])

    return{
        getAllTodoListsApiState
    }
}