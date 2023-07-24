import React from 'react'
import {Container} from '@design/container'
import {TodoListItemContainer} from '../components/index'
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