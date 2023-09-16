import React from 'react'
import { TodoListsContainer } from '../components/index'
import { Container } from '@design/container'
import { useTheme } from 'styled-components'
import { useUpdateTodoListsImplementation } from '../hooks/implementation/use-update-todo-lists-implementation'
import { Text } from '@design/text'
import {OpenFormButton} from '@ui/common'
import {useOpenAddNewListForm} from '../hooks/ui-interactions/use-open-add-new-list-form'
//add loading state

//storybook view is in todo-lists-container api mocking addons currently not updated for Webpack5
export const TodoListsView = () => {
    const theme = useTheme()
    const { getAllTodoListsApiState } = useUpdateTodoListsImplementation()
    const { allTodoLists, loading, errorMessage } = getAllTodoListsApiState
    const {openAddNewListFormHandler, state} = useOpenAddNewListForm()
    return(
        <>
            <Container
                background = {theme.colors.neutral.background}
                width = {'100%'}
                height = {'100%'}
                display = {'flex'}
                flexDirection = {'column'}
                alignItems = {'flex-start'}
            >
                <Text text = {'Todo Lists'} color = {'theme.colors.neutral.onSurface'} fontSize={theme.space.lg} fontFamily={'Albert_Sans'} />
            </Container>
            <Container 
                background = {theme.colors.neutral.background}
                width = {'100%'}
                height={'60vh'}
                display = {'block'}
            >
                <TodoListsContainer allTodoLists={allTodoLists} loading={loading} errorMessage={errorMessage} />
            </Container>    
            <Container pt = {'35px'} flexGrow = {'0'} width = {'100%'} justifyContent= {'flex-end'} alignItems = {'center'} background={theme.colors.neutral.surface}>
                <OpenFormButton onClick = {openAddNewListFormHandler} />
            </Container>
        </>
    )
}
