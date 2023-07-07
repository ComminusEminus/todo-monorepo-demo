import React from 'react'
import {TodoListsContainer} from '@ui/todo-lists'
import {Container} from '@design/container'
import {useTheme} from 'styled-components'

export const TodoListsView = () => {
    const theme = useTheme()

    return(
        <Container 
            background = {theme.colors.neutral.background}
            width = {'100%'}
            height = {'100%'}
        >
            <TodoListsContainer />
        </Container>
    )
}
