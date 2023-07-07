import React from 'react'
import {useDeleteTodoListUI} from '@ui/todo-list'
import {ListItemStatus} from '@core/entities'
import {Button} from '@design/buttons'
import {useTheme} from 'styled-components'

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