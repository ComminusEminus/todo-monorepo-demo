import {useGetTodoListById} from '@reactui/http'
import { useRef, useEffect } from 'react'


export interface IUseGetTodoListByIdImplementation{
    selectedTodoListId?: string | null, 
    updateTodoListItems?: boolean | null
}

export const useGetTodoListUi = ({selectedTodoListId, updateTodoListItems}: IUseGetTodoListByIdImplementation) => {

    const {getTodoListApiHandler, todoListApiState} = useGetTodoListById()


    useEffect(() => {
        if(selectedTodoListId){
            //console.log('executing useGetTodoListByIdImplementation: updating selected todolist')
            getTodoListApiHandler(selectedTodoListId)
        }   
    }, [selectedTodoListId, updateTodoListItems])
    
    return{todoListApiState}
}

