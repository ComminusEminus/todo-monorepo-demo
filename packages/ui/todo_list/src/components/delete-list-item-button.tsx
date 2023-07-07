import React from 'react'
import {useDeleteTodoListItemUI} from '@ui/todo-list'
import {Button} from '@design/buttons'
import {useTheme} from 'styled-components'

export const DeleteListItemButton = () => {
    const {visibilityState, visibilityHandler} = useDeleteTodoListItemUI()
    const theme = useTheme()

    return (
        <Button 
            size = {'sm'} 
            type = {'button'} 
            text = {'Delete'}
            onClick = {visibilityHandler}
        />
    )
}
