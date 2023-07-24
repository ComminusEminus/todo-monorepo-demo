import React from 'react'
import {Container} from '@design/container'
import {useListsContext} from '@ui/contexts'
import styled, {useTheme, css} from 'styled-components'

interface ITodoListBackground{
    children?: JSX.Element | JSX.Element[] | string;
    listId?: string;
}

export const TodoListsBackground = (props: ITodoListBackground) => {
    const {viewTodoList} = useListsContext()
    const theme = useTheme()
    return(
        <Container background = {viewTodoList === props.listId? theme.colors.neutral.surface : theme.colors.neutral.surfaceLow}>
            {props.children}
        </Container>
    )
}