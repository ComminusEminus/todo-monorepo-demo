import {useListItemContext} from '@ui/contexts'
import React from 'react'

export const useSelectTodoListItem = () => {
    const {setViewTodoListItem, viewTodoListItem, originalState} = useListItemContext()
    
    const selectHandler = () => {
        if(!originalState){
            return;
        }
        if(viewTodoListItem === originalState.id){
            return;
        }
        setViewTodoListItem?.(originalState.id)
        
    }

    return {selectHandler, originalState} ;
}