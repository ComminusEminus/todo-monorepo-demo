import React from 'react'
import {useGetTodoListById} from '../hooks/use-get-todolist-by-id'
import {Container} from '@design/container'
import {Text} from '@design/text'
import {useTheme} from 'styled-components'
import {MapTodoListItems} from './map-todo-list-items'


export const TodoListItemContainer = () => {
    const {todoList} = useGetTodoListById()
    const theme = useTheme()
    const emptyRespose = 'No List Selected'

    return(
        <>
            {
                !todoList && (
                    <Container flexDirection = {'column'} background = {theme.colors.neutral.surface}>
                        <Text text = {emptyRespose} color = {theme.colors.neutral.onBackground} fontSize = {'xs'} fontFamily = {'Albert-Sans'} />
                    </Container>
                )
            }
            {
                todoList && (
                    <Container flexDirection = {'column'} background = {theme.colors.neutral.surface}>
                        <MapTodoListItems list = {todoList}/>
                    </Container>
                )
            }
        </>
    )
   
}