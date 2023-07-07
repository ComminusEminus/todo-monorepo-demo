import React from 'react'
import {Container} from '@design/container'
import {useListContext} from '@todo/contexts'
import styled, {useTheme, css} from 'styled-components'

interface ITodoListBackground{
    children?: JSX.Element | JSX.Element[] | string;
}

export const TodoListsBackground = (props: ITodoListBackground) => {
    const {viewTodoList, orginalState} = useListContext()
    const theme = useTheme()
    return(
        <Container background = {viewTodoList === orginalState.id? theme.colors.neutral.surface : theme.colors.neutral.surfaceLow}>
            {props.children}
        </Container>
    )
}