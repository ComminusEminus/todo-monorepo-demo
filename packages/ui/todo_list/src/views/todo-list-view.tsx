import React from 'react'
import {Container} from '@design/monorepo'
import {TodoListItemContainer} from '@todo/todolist-components'
import {useTheme} from 'styled-components'

export const TodoListView = () => {
    const theme = useTheme()

    return(
        <Container 
            background = {theme.colors.neutral.background}
            width = {'100%'}
            height = {'100%'}
        >
            <TodoListItemContainer />
        </Container>
    )
}