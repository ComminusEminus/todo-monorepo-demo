import {useUIContext} from '@ui/contexts'
import React, {useState, useEffect} from 'react'
import {useGetAllTodoListsApi} from '../api/use-getall-todolists-state'

export const useUpdateTodoListsImplementation = () => {
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