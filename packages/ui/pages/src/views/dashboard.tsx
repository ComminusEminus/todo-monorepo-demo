import React from 'react'
import {Container} from '@design/container'
import {TodoListsView} from '@ui/todo-lists'
import {TodoListView} from '@ui/todo-list'
import {ListDetailView} from '@ui/list-item-detail'
import {FormDisplayView} from '@ui/form-display'
import {useTheme} from 'styled-components'
import {LogoutButton} from '@ui/user'
export const Dashboard = () => {
    const theme = useTheme()
    return(
        <>
            <Container
                    width = {'100%'}
                    alignItems = {'center'}
                    justifyContent = {'flex-end'}
                    pt = {'5px'}
                    pb = {'5px'}
                    pl = {'5px'}
                    pr = {'5px'}
                    background = {theme.colors.neutral.surfaceLow}
                >
                    <LogoutButton />
                </Container>
            <Container
                justifyContent = {'space-evenly'}
                alignItems = {'flex-start'}
                pt = {'5px'}
                pb = {'5px'}
                pl = {'5px'}
                pr = {'5px'}
            >
                <Container
                    flexGrow = {'1'}
                    flexDirection = {'column'}
                    justifyContent = {'space-between'}
                    alignItems = {'flex-start'}
                    width = {'100%'}
                    maxHeight = {'50vh'}
                >
                    <TodoListsView />
                </Container>
                <Container
                    flexGrow = {'2'}
                    flexDirection = {'column'}
                    height = {'fit-content'}
                    alignItems = {'flex-start'}
                    justifyContent = {'flex-start'}
                    pt = {'10px'}
                    pb = {'10px'}
                    pr = {'10px'}
                    pl = {'10px'}
                >
                    <ListDetailView />
                    <FormDisplayView />
                </Container>
                <Container
                    flexGrow = {'1'}
                    flexDirection = {'column'}
                    justifyContent = {'space-between'}
                    alignItems = {'flex-start'}
                    maxHeight = {'50vh'}
                    
                >
                    <TodoListView />
                </Container>
            </Container>
        </>
    )
}