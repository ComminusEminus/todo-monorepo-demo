import React from 'react'
import {Container} from '@design/container'
import {useListItemContext} from '@ui/contexts'
import {useTheme} from 'styled-components'

interface ITodoListItemBackground{
    children?: JSX.Element | JSX.Element[] | string;
}

export const TodoListItemBackground = (props: ITodoListItemBackground) => {
    const theme = useTheme()
    const {viewTodoListItem, originalState} = useListItemContext()
    if(originalState){
        return(
            <Container background = {viewTodoListItem === originalState.id ? theme.colors.neutral.surface : theme.colors.neutral.surfaceLow}>
                {props.children}
            </Container>
        )
    }else{
        return(
            <p>Loading</p>
        )
    }
}