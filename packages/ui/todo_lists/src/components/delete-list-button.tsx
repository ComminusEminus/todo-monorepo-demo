import React from 'react'
import {useDeleteTodoListUI} from '../hooks/use-delete-todolist-ui'
import {Button} from '@design/buttons'

export const DeleteListButton = () => {
    const {visibilityState, visibilityHandler} = useDeleteTodoListUI()

    return(
        <Button 
            size = {'sm'} 
            type = {'button'} 
            text = {'Delete'}
            onClick = {visibilityHandler}
        />
    )
}