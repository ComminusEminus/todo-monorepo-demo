import React from 'react'
import {useCompleteTodoListItemUI} from '../hooks/index'
import {ListItemStatus} from '@core/entities'
import {Button} from '@design/buttons'
import {useTheme} from 'styled-components'



export const CompleteListItemButton = () => {
    const {completeState, completeHandler} = useCompleteTodoListItemUI()
    const theme = useTheme()

    return (
        <Button 
            size = {'sm'} 
            type = {'button'} 
            color = {theme.colors.secondary.onBase}
            buttonStyle = {completeState === ListItemStatus.INCOMPLETE? 'secondary' : 'success'}
            text = {completeState === ListItemStatus.INCOMPLETE? ListItemStatus.INCOMPLETE : ListItemStatus.COMPLETED}
            onClick = {completeHandler}
        />
    )
}
