import React from 'react'
import { useTheme } from 'styled-components'
import { Text, Container, ListBackground } from '@reactui/common'
import { useListItemContext, useUIContext } from '@reactui/contexts'

interface ITodoListItemBackground {
    children?: JSX.Element | JSX.Element[] | string;
}

export const ListItemBackground = (props: ITodoListItemBackground) => {
    const theme = useTheme()

    const { state } = useListItemContext()
    const { listItemData } = state
    const {_id} = listItemData

    const { state } = useUIContext()
    const { selectedTodoListItemId } = state
    e
    return(
        <ListBackground selectedId = {selectedTodoListItemId} currentId = {_id} >
            {props.children}
        </ListBackground>
    ) 
    
}
