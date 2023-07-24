import React from 'react'
import {useGetAllTodoListsState} from '../hooks/index'
import {MapTodoLists} from './index'
import {Text} from '@design/text'
import {Container} from '@design/container'
import {useTheme} from 'styled-components'

export const TodoListsContainer = () => {
    const {todoLists} = useGetAllTodoListsState()
    const theme = useTheme()
    const emptyRespose = 'You currently have nothing Todo!'
    return(
        <>
            {
                !todoLists && (
                    <Container flexDirection = {'column'} background = {theme.colors.neutral.surface}>
                        <Text text = {emptyRespose} color = {theme.colors.neutral.onBackground} fontSize = {'xs'} fontFamily = {'Albert-Sans'} />
                    </Container>
                )
            }
            {
                todoLists && (
                    <Container flexDirection = {'column'} background = {theme.colors.neutral.surface}>
                        <MapTodoLists lists = {todoLists} />
                    </Container>
                )
            }
        </>
        
        
    )


}
