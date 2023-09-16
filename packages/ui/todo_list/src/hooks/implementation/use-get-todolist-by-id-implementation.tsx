import {useGetTodoListById} from '../api/use-get-todolist-by-id'
import { useRef, useEffect } from 'react'
import {IMappedUserProfile} from '@core/entities'

export interface IUseGetTodoListByIdImplementation{
    selectedTodoListId?: string | null, 
    updateTodoListItems?: boolean | null
}

export const useGetTodoListByIdImplementation = ({selectedTodoListId, updateTodoListItems}: IUseGetTodoListByIdImplementation) => {

    const {getTodoListApiHandler, todoListApiState} = useGetTodoListById()


    useEffect(() => {
        if(selectedTodoListId){
            console.log('executing useGetTodoListByIdImplementation: updating selected todolist')
            getTodoListApiHandler(selectedTodoListId)
        }   
    }, [selectedTodoListId, updateTodoListItems])
    
    return{todoListApiState}
}

/*

useEffect(() => {
        if(selectedTodoListId && selectedTodoListId !== null || selectedTodoListId && selectedTodoListId !== null && updateTodoListItems){
            console.log('executing useGetTodoListByIdImplementation: updating selected todolist')
            getTodoListApiHandler(selectedTodoListId)
        }   
    }, [selectedTodoListId, updateTodoListItems])
    

*/