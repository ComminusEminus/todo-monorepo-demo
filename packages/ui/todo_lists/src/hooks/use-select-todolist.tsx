import {useListsContext} from '@ui/contexts'
import React from 'react'

export const useSelectTodoList = () => {
    const {setViewTodoList, viewTodoList, originalState} = useListsContext()
    
    const selectTodoListHandler = () => {
        if(!originalState){
            return;
        }
        if(viewTodoList === originalState.id){
            return;
        }else{
            setViewTodoList?.(originalState.id)
        }
    }

    return {selectTodoListHandler} as const;
}