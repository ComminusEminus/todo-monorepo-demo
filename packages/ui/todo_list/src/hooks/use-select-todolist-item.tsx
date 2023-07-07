import {useListItemContext} from '@todo/ui-context'
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

    return {selectHandler} as const;
}