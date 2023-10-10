import React, { useEffect } from 'react'
import {useGetTodoListById} from '@reactui/http'


export interface IUseGetTodoListByIdImplementation{
    selectedTodoListId?: string | null, 
}

export const useGetListHandler = ({selectedTodoListId}: IUseGetTodoListByIdImplementation) => {

    const {getTodoListApiHandler, todoListApiState} = useGetTodoListById()


    useEffect(() => {
        if(selectedTodoListId){
            getTodoListApiHandler(selectedTodoListId)
        }   
    }, [selectedTodoListId])
    
    return{todoListApiState}
}

